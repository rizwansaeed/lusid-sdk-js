#!/bin/bash -e

if [[ ${#1} -eq 0 ]]; then
    echo
    echo "[ERROR] swagger file not specified"
    exit 1
fi

gen_root=/usr/src
sdk_output_folder=$gen_root/sdk
swagger_file=$gen_root/$1
config_file=$gen_root/config.json

#   remove all previously generated files
shopt -s extglob 
echo "removing previous sdk:"
rm -rf $sdk_output_folder/
shopt -u extglob 

sdk_version=$(cat $swagger_file | jq -r '.info.version')
cat $config_file | jq -r --arg SDK_VERSION "$sdk_version" '.packageVersion |= $SDK_VERSION' > temp && mv temp $config_file

echo "generating sdk"
java -jar /usr/swaggerjar/swagger-codegen-cli.jar generate \
    -i $swagger_file \
    -l javascript \
    -o $sdk_output_folder \
    -c $config_file

cd $gen_root

rm -rf $sdk_output_folder/.swagger-codegen
rm $sdk_output_folder/.swagger-codegen-ignore
rm $sdk_output_folder/README.md
rm $sdk_output_folder/.travis.yml
rm $sdk_output_folder/git_push.sh
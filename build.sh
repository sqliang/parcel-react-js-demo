#!/bin/bash

# prepare build
rm -rf ./dist
rm -rf .cache/
rm -rf ./output


# release

npm run release

# result
if [ $? -ne 0 ]; then
    exit 1
fi

mkdir output

cd output
mkdir -p template/parcelReactJs webroot/static/parcelReactJs

cp ../dist/parcelReactJs.html ./template/parcelReactJs
cp -r ../dist/* ./webroot/static/parcelReactJs
tar czf parcelReactJs.tar.gz template
tar czf static-parcelReactJs.tar.gz webroot
rm -rf template webroot
#tar czf fe.tar.gz *

# cd ..

# mv output/fe.tar.gz .
# rm -rf output/*

# mv fe.tar.gz output/

# result
if [ $? -eq 0 ]; then
    echo '[build] done'
    exit 0
else
    echo '[build] fail'
    exit 1
fi

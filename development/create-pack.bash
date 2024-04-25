#!/usr/bin/bash

if [[ -z $1 ]]
then
    echo "define the new package name"
    exit 1
fi    

package_name=$1
root_folder=$PWD
dev_folder="development"
template_folder="package_template"
pack_template_folder="package_template"
pack_folder="packages"

act_template_folder="actions_templates"
act_folder=".github/workflows"

# Prevent owerwriting
if [ -d $pack_folder/$package_name ]; then
  echo "the package already exists."
  exit 1
fi

function ask_yes_or_no() {
    read -p "$1 ([y]es or [N]o): "
    case $(echo $REPLY | tr '[A-Z]' '[a-z]') in
        y|yes) echo "yes" ;;
        *)     echo "no" ;;
    esac
}

# Ask to continue
if [[ "no" == $(ask_yes_or_no "Are you sure?") || \
      "no" == $(ask_yes_or_no "Are you *really* sure?") ]]
then
    echo "Skipped."
    exit 0
fi

echo "the new package will be created:"
echo name $package_name:
echo package location $pack_folder/$package_name
echo actions location $act_folder

# Create the new package
mkdir $pack_folder/$package_name
cp -r ./$dev_folder/$pack_template_folder/* ./$pack_folder/$package_type/$package_name/

# Create the new package actions
cp -r ./$dev_folder/$act_template_folder/new-package-test.yaml ./$act_folder/${package_name}-test.yaml
cp -r ./$dev_folder/$act_template_folder/new-package-github.yaml ./$act_folder/${package_name}-github.yaml
cp -r ./$dev_folder/$act_template_folder/new-package-npm.yaml ./$act_folder/${package_name}-npm.yaml

exit 0
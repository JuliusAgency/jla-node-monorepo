#!/usr/bin/bash

if [[ -z $1 || -z $2 ]]
then
    echo "define type and name"
    exit 1
fi    

package_type=$1
package_name=$2
root_folder=$PWD
dev_folder="development"
template_folder="package_template"
pack_template_folder="package_template"
pack_folder="packages"

act_template_folder="actions_templates"
act_folder=".github/workflows"

if [ -d $pack_folder/$package_type/$package_name ]; then
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

if [[ "no" == $(ask_yes_or_no "Are you sure?") || \
      "no" == $(ask_yes_or_no "Are you *really* sure?") ]]
then
    echo "Skipped."
    exit 0
fi

echo "the package will be created:"
echo type $package_type:
echo name $package_name:
echo package location $pack_folder/$package_type/$package_name
echo actions location $act_folder

mkdir $pack_folder/$package_type/$package_name
cp -r ./$dev_folder/$pack_template_folder/* ./$pack_folder/$package_type/$package_name/
cp -r ./$dev_folder/$act_template_folder/* ./$act_folder

exit 0
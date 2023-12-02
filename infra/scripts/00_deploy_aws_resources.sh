#!/bin/bash

# Get commandline arguments
while (( "$#" )); do
  case "$1" in
    --destroy)
      flagDestroy="true"
      shift
      ;;
    --dry-run)
      flagDryRun="true"
      shift
      ;;
    *)
      shift
      ;;
  esac
done

### Build frontend
frontendAppPath="$(dirname $(dirname `pwd`))/apps/frontend"
npm run --prefix $frontendAppPath build

# Frontend app build path
frontendBuildPath="$frontendAppPath/build"

if [[ $flagDestroy != "true" ]]; then

  # Initialize Terraform
  terraform -chdir=../terraform init

  # Plan Terraform
  terraform -chdir=../terraform plan \
    -var AWS_REGION=$AWS_REGION \
    -var frontend_app_file_directory_path="$frontendBuildPath" \
    -out "./tfplan"

  # Apply Terraform
  if [[ $flagDryRun != "true" ]]; then
    terraform -chdir=../terraform apply tfplan
  fi
else

  # Destroy Terraform
  terraform -chdir=../terraform destroy \
    -var AWS_REGION=$AWS_REGION \
    -var frontend_app_file_directory_path="$frontendBuildPath"
fi

##########
### S3 ###
##########

# S3 bucket
resource "aws_s3_bucket" "frontend" {
  bucket = local.s3_bucket_name

  force_destroy = true
}

# S3 server side encryption
resource "aws_s3_bucket_server_side_encryption_configuration" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  rule {
    bucket_key_enabled = true

    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# S3 bucket ownership
resource "aws_s3_bucket_ownership_controls" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

# S3 public access
resource "aws_s3_bucket_public_access_block" "frontend_public" {
  bucket = aws_s3_bucket.frontend.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# S3 bucket policy for public access
resource "aws_s3_bucket_policy" "public_access" {
  bucket = aws_s3_bucket.frontend.id
  policy = data.aws_iam_policy_document.s3_public_access.json
}

# Directory for frontend app build files
module "template_files" {
  source   = "hashicorp/dir/template"
  base_dir = var.frontend_app_file_directory_path
}

# Frontend application files
resource "aws_s3_object" "frontend" {
  for_each = module.template_files.files

  bucket = aws_s3_bucket.frontend.id

  key          = each.key
  source       = each.value.source_path
  content_type = each.value.content_type
  content      = each.value.content

  etag = each.value.digests.md5
}

# Website config
resource "aws_s3_bucket_website_configuration" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  index_document {
    suffix = "index.html"
  }

  # error_document {
  #   key = "error.html"
  # }
}

############
### Data ###
############

data "aws_iam_policy_document" "s3_public_access" {
  statement {
    sid    = "PublicReadGetObject"
    effect = "Allow"

    principals {
      identifiers = ["*"]
      type        = "*"
    }
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.frontend.arn}/*"]
  }
}

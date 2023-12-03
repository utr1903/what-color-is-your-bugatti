################
### Route 53 ###
################

# AWS route53 zone
resource "aws_route53_zone" "godaddy" {
  name = "what-color-is-your-bugatti.com"
}

resource "aws_route53_record" "godaddy" {
  zone_id = aws_route53_zone.godaddy.id
  name    = aws_route53_zone.godaddy.name
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.frontend.website_domain
    zone_id                = aws_s3_bucket.frontend.hosted_zone_id
    evaluate_target_health = false
  }
}

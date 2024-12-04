#!/bin/bash
set -e
set -x

aws s3 sync build/ s3://docs.arthera-net --delete --dryrun
aws s3 sync build/ s3://docs.arthera-net --delete
aws cloudfront create-invalidation --distribution-id E1KMW14ZJBNM34 --paths "/*"
exit

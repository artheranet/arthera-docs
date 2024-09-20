#!/bin/bash

aws s3 cp ../epoch8131.g s3://release.arthera-net
aws cloudfront create-invalidation --distribution-id EO8HM5GITDD9M --paths "/*"
exit

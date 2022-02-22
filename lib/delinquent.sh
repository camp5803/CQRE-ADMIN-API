#!/bin/bash

# crontab 0 9 * * * /home/ubuntu/admin-server/lib/delinquent.sh

# shellcheck disable=SC2164
cd /home/ubuntu/admin-server/lib

git fetch

local=$(git rev-parse HEAD)
target=$(git rev-parse origin/master)
file="delinquent.log"

if [ ! -e $file ];
then
  touch $file
fi

if [ $local != $target ];
then
  git stash
  git pull origin master

  echo "[$(date +%Y)-$(date +%m)-$(date +%d) $(date +%H):$(date +%M):$(date +%S)]: git fetch 및 pull 진행" >> $file
fi

echo "[$(date +%Y)-$(date +%m)-$(date +%d) $(date +%H):$(date +%M):$(date +%S)]: delinquent.js 실행" >> $file

node delinquent.js
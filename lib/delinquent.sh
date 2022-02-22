#!/bin/bash

# crontab 0 9 * * * /home/ubuntu/admin-server/lib/delinquent.sh

backup="crontab.bak"

if [ ! -e $backup ];
then
  touch $backup
  echo "crontab 0 9 * * * /home/ubuntu/admin-server/lib/delinquent.sh" >> $backup
fi

# shellcheck disable=SC2164
cd /home/ubuntu/admin-server/lib

#git fetch
#
#local=$(git rev-parse HEAD)
#target=$(git rev-parse origin/master)
#file="delinquent.log"
#
#if [ $local != $target ];
#then
#  git stash
#  git pull origin master
#
#  echo "[$(date +%Y)-$(date +%m)-$(date +%d) $(date +%H):$(date +%M):$(date +%S)]: git fetch 및 pull 진행" >> $file
#fi

echo "[$(date +%Y)-$(date +%m)-$(date +%d) $(date +%H):$(date +%M):$(date +%S)]: delinquent.js 실행" >> $file
echo "[$(date +%Y)-$(date +%m)-$(date +%d) $(date +%H):$(date +%M):$(date +%S)]" >> js.log
node delinquent.js >> js.log
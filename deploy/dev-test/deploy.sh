#!/bin/bash

# any future command that fails will exit the script
set -e
# Lets write the public key of our aws instance
eval $(ssh-agent -s)
echo "key $PRIVATE_KEY"
#echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
#ssh-add <(echo "$SSH_PRIVATE_KEY" | base64 --decode)
#ssh-add <(echo "$PRIVATE_KEY" | base64 --decode)
echo "${PRIVATE_KEY}" | tr -d '\r' | ssh-add - > /dev/null

# ** Alternative approach
# echo -e "$PRIVATE_KEY" > /root/.ssh/id_rsa
# chmod 600 /root/.ssh/id_rsa
# ** End of alternative approach

# disable the host key checking.
#chmod 600 ./deploy/disableHostKeyChecking.sh
# mkdir ~/.ssh
# cp .gitlab/known_hosts ~/.ssh/

echo "hahaha"
mkdir -p ~/.ssh
touch ~/.ssh/config
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config


# mkdir -p ~/.ssh
# '[[ -f /.dockerenv ]] && echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config'

# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# comma seperated values of ip addresses.
DEPLOY_SERVERS=$DEPLOY_SERVER_DEV_TEST

# lets split this string and convert this into array
# In UNIX, we can use this commond to do this
# ${string//substring/replacement}
# our substring is "," and we replace it with nothing..
ALL_SERVERS=(${DEPLOY_SERVER_DEV_TEST//,/ })
echo "ALL_SERVERS ${ALL_SERVERS}"

# Lets iterate over this array and ssh into each EC2 instance
# Once inside.
# 1. Stop the server
# 2. Take a pull
# 3. Start the server
for server in "${ALL_SERVERS[@]}"
do
  echo "deploying to ${server}"
  echo "deleting old files"
  #ssh ec2-user@${server} "rm -rf /home/ec2-user/luna-pay-api"  
  #ssh ec2-user@${server} 'bash -s' < ./deploy/dev-test/createFolder.sh
  echo "deploying to ${server}"
  scp -r \dist ec2-user@${server}:/home/ec2-user/luna-pay-api
  ssh ec2-user@${server} 'bash -s' < ./deploy/dev-test/updateAndRestart.sh

done

https://gist.github.com/sebble/e5af3d03700bfd31c62054488bfe8d4f

user=beduffy
while curl -s "https://api.github.com/users/$user/starred?per_page=100&page=${page:-1}" \
		    |jq -r -e '.[].full_name' && [[ ${PIPESTATUS[1]} != 4 ]]; do
    let page++
done
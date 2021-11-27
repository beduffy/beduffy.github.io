import json

import requests

fp = 'beduffy_starred.json'
# https://api.github.com/users/beduffy/starred
# https://api.github.com/users/beduffy/starred?per_page=2900   only gave me 100

all_data = []
per_page = 100
for page_num in range(31):
    url = 'https://api.github.com/users/beduffy/starred?per_page={}&page={}'.format(per_page, page_num)

    r = requests.get(url)
    data = r.json()
    all_data.extend(data)
    print('page_num: {}. len(all_data): {}'.format(page_num, len(all_data)))
    # TODO wtf? 
    # page_num: 10. len(all_data): 1100
    # page_num: 11. len(all_data): 1102
    # import pdb;pdb.set_trace()

import pdb;pdb.set_trace()

with open(fp, 'w') as f:
    json.dump(all_data, f)
    # data = json.load(f)
    # print()
    # print(len(data))
    # import pdb;pdb.set_trace()
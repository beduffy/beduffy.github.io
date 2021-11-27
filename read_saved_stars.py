import json

fp = 'beduffy_starred.json'


with open(fp, 'r') as f:
    data = json.load(f)
    print()
    print(len(data))
    import pdb;pdb.set_trace()


# TODO get all stars and links and categorise them and understand how much I care for each field and keep thinking about this over the next 30 years
# TODO nice visualisations
# TODO description
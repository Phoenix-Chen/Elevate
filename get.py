import pokitdok
import simplejson

#pd = pokitdok.api.connect('hQNYOkewxszEE5RM9vQ5', 'AiagztbCKl4amaHE5qQM9amOsULzLE2V1M3oZves')
#pd = pokitdok.api.connect('N6Q0xgv7pa16lP1LWrR7', 'ZQgBx4Rhfq3tq5s15QIy8dEyXJew3UyKzRJQyhk5')
#pd = pokitdok.api.connect('AFHQlg9ZFUMREthSisma', 'Xj1yJrWFwfWSRY0F5XbyDcD7yQLf72Y0iq5chJUu')
#pd = pokitdok.api.connect('psD95Yv9BH6N9NilKB6R', 'Aem7cKpOCbwHECl2E3cxCSW3QTheDzNVmprclxpN')
pd = pokitdok.api.connect('OxP6c949uBHHvUIWdzWn', 'jxWeQVSacvZLQ1fv5KsXhwvJPKesfacorTYnokZo')

def get_providers(zipc, rad):
    return filter(pd.providers(zipcode = str(zipc), radius = str(rad)+'mi', specialty='psychologist', sort='distance'))[:-1]+']'

def filter(jsonstr):
    providers_list = jsonstr.get('data')
    i = 0
    octavia = '"Providers":[ '
    for provider_data in providers_list:
        if i >= 3:
            return octavia
        octavia = octavia + '{"distance":"' + str(provider_data.get('distance')) + '",'
        provider = provider_data.get('provider')
        octavia = octavia + '"name":"' + provider.get('first_name') + ' ' + provider.get('last_name') + '",'
        location = provider.get('locations')[0]
        octavia = octavia + '"address":"' + location.get('address_lines')[0] + ', ' + location.get('city') + '",'
        octavia = octavia + '"phone":"' + str(provider.get('phone')) + '"},'
        i = i + 1

if __name__ == "__main__":
    print get_providers('94040', '10')
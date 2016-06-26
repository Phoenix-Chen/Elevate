import pokitdok

pd = pokitdok.api.connect('hQNYOkewxszEE5RM9vQ5', 'AiagztbCKl4amaHE5qQM9amOsULzLE2V1M3oZves')

def get_providers(zipc, rad):
    return pd.providers(zipcode = str(zipc), radius = str(rad)+'mi')


if __name__ == "__main__":
    print get_providers('94040', '10')
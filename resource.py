import requests
from bs4 import BeautifulSoup

url = "https://rivalskins.com/heroes/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

heroes = []

data = {}

# for hero in soup.find_all("div",class_= "hero-item"):
#     name = hero.a.span.get_text()
#     heroes.append(name)

#     url2 = f"https://rivalskins.com/hero/{name}"
#     hero_response = requests.get(url2)
#     hero_soup = BeautifulSoup(hero_response.text,"html.parser")

#     for skin_name in hero_soup.find_all("div",class_ = "bundle-name"):
#         skin = skin_name.get_text()
#         data[name] = {"skins":skin}

skins = []
url2 = f"https://rivalskins.com/hero/Angela"
hero_response = requests.get(url2)
hero_soup = BeautifulSoup(hero_response.text,"html.parser")
for skin_name in hero_soup.find_all("div",class_ = "bundle-name"):
    skin = skin_name.get_text()
    skins.append(skin)

data["Angela"] = {"skins":skins}

    

print(data)
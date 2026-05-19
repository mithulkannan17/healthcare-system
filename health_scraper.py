import pandas as pd
import requests
from bs4 import BeautifulSoup

url = "https://news.google.com/rss/search?q=health"

headers = {

    "User-Agent":
    "Mozilla/5.0"
}

response = requests.get(

    url,

    headers=headers,

    timeout=10
)

soup = BeautifulSoup(
    response.content,
    "xml"
)

items = soup.find_all("item")

alerts = []

for item in items[:10]:

    alerts.append({

        "headline": item.title.text
    })

alerts_df = pd.DataFrame(alerts)

alerts_df.to_csv(

    "data/health_alerts.csv",

    index=False
)

print("Health alerts updated successfully")
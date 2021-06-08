from app_store_scraper import AppStore
from pprint import pprint

target_app = AppStore(country="us", app_name="celsius-secure-crypto-wallet")
target_app.review(how_many=20)

pprint(target_app.reviews)
pprint(target_app.reviews_count)


import re

import requests
import json
from bs4 import BeautifulSoup
import glob
import time
# from schedule import every, repeat, run_pending
import schedule
import logging

logging.basicConfig()
schedule_logger = logging.getLogger('schedule')
schedule_logger.setLevel(level=logging.DEBUG)


# https://zippo.co.id/getproduct/windproof?parameter=brand[]_attribute[]_rating[]&priceFrom=0&priceTo=2730000&sortby=popularity&viewperpage=80&page=1

def get_product_by_page(page, viewperpage):
    params = {
        'parameter': 'brand[]_attribute[]_rating[]',
        'priceFrom': '0',
        'priceTo': '2730000',
        'sortby': 'popularity',
        'viewperpage': viewperpage,
        'page': page
    }

    res = requests.get('https://zippo.co.id/getproduct/windproof', params=params)
    soup = BeautifulSoup(res.text, 'html5lib')

    # soup = BeautifulSoup(open('./res.html'), 'html5lib')
    products = soup.findAll(attrs={'class': 'grid-child n-1-1per2 n-540-1per3 n-1200-1per4'})

    data_json = []

    for product in products:
        title = product.find('h3', attrs={'class': 'ngc-title'})
        price = product.find(attrs={'class': 'prod-price'})
        stock = product.find(attrs={'class': 'badge-list'})
        img = product.find(attrs={'ngc-media'})

        price_raw = price.find('span').text.strip()

        price_raw_remove_idr = re.sub(r"[IDR ]", "", price_raw)
        price_raw_remove_dot = re.sub(r"[. ]", "", price_raw_remove_idr)

        try:
            stock_span = stock.find('span').text.strip()
        except:
            stock_span = 'null'

        single_product_json = {
            'title': title.find('a').text.strip(),
            'price': price_raw_remove_dot,
            'stock': stock_span,
            'img': img.find('img')['src'],
        }

        data_json.append(single_product_json)

    # for debugging
    print(time.time())
    with open(f'./json-results/page{page}.json', 'w+') as outfile:
        json.dump(data_json, outfile)


'''
Join json from result of each page
'''


def join_json():
    files = sorted(glob.glob("./json-results/*.json"))
    datas = []
    for file in files:
        with open(file) as json_file:
            data = json.load(json_file)
            datas += data

    with open(f'./joined-json-results/data-zippo.json', 'w+') as outfile:
        json.dump(datas, outfile)

    # with open(f'./joined-json-json-results/data-zippo-{time.time()}.json', 'w+') as outfile:
    #     json.dump(datas, outfile)


def job():
    start: float = time.time()
    print('Im Working scraping')
    # Scraping data each page
    total_page = 12
    viewperpage = 80
    for i in range(0, total_page):
        page = i + 1
        get_product_by_page(page, viewperpage)

    join_json()

    end: float = time.time()
    print(f"Time Estimated {end - start}")


def jobs():
    start: float = time.time()
    print('Im Working hard')
    end: float = time.time()
    print(f"Time Estimated {end - start}")


# scheduling steps set ad 09.11 am 20/11/2022
schedule.every(12).hours.do(job)
# schedule.every(30).minutes.do(job)
# schedule.every().day.at("06:00").do(job)

if __name__ == '__main__':
    while True:
        schedule.run_pending()
        time.sleep(1)

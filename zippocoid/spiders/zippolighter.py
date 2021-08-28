# -*- coding: utf-8 -*-
import scrapy
from scrapy_splash import SplashRequest


class ZippolighterSpider(scrapy.Spider):
    name = 'zippolighter'
    allowed_domains = ['zippo.co.id/product/windproof']

    # start_urls = ['http://zippo.co.id/product/windproof/'] original start
    # http://zippo.co.id/getproduct/windproof?parameter=brand[]_attribute[]_rating[]&priceFrom=0&priceTo=2730000&sortby=popularity&viewperpage=80&page=1

    scripts = '''
        function main(splash, args)
            assert(splash:go(args.url))
            assert(splash:wait(8))
            return splash:html()
        end
    '''
    
    page = 12

   

    def start_requests(self):
        yield SplashRequest(
            f"http://zippo.co.id/getproduct/windproof?parameter=brand[]_attribute[]_rating[]&priceFrom=0&priceTo=2730000&sortby=popularity&viewperpage=80&page={self.page}", 
            self.parse, endpoint="execute",args={'lua_source': self.scripts})

    def parse(self, response):
        for product in response.xpath("//div[@class='product-box smaller']"):
            stock = product.xpath(".//ul[@class='badge-list']/li[1]/span/text()").get()

            yield {
                'title': product.xpath(".//h3[@class='ngc-title']/a/text()").get(),
                'price': product.xpath(".//div[@class='prod-price']/span/text()").get(),
                'stock': stock,
                'img': product.xpath(".//div[@class='ngc-media']/a/img/@src").extract()[0]
            }

        # next_page = splash:select("ul[@class='ui-pagination smaller']/li[last()]/a")

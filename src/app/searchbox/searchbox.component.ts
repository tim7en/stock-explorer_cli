import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GetmarketserviceService } from '../services/getmarketservice.service';


export interface SearchSYM {
  symbol: string;
  name: string;
  lastsale: number;
  MarketCap: number;
  IPOyear: number;
  Sector: string;
  Industry: string;
  Exchange: string;
}

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<SearchSYM[]>;
  marketService;
  options: SearchSYM[] = [
      {
        symbol: "CQP",
        name: "Cheniere Energy Partners, LP",
        lastsale: 45.11,
        MarketCap: 21830000000,
        IPOyear: 2007,
        Sector: "Public Utilities",
        Industry: "Oil/Gas Transmission",
        Exchange: "AMEX"
      },
      {
        symbol: "AAPL",
        name: "Apple Inc.",
        lastsale: 213.04,
        MarketCap: 980210000000,
        IPOyear: 1980,
        Sector: "Technology",
        Industry: "Computer Manufacturing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ADBE",
        name: "Adobe Inc.",
        lastsale: 298.86,
        MarketCap: 145080000000,
        IPOyear: 1986,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "AGNC",
        name: "AGNC Investment Corp.",
        lastsale: 17.14,
        MarketCap: 9390000000,
        IPOyear: 2008,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NASDAQ"
      },
      {
        symbol: "AKAM",
        name: "Akamai Technologies, Inc.",
        lastsale: 88.13,
        MarketCap: 14370000000,
        IPOyear: 1999,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ALGN",
        name: "Align Technology, Inc.",
        lastsale: 209.08,
        MarketCap: 16730000000,
        IPOyear: 2001,
        Sector: "Health Care",
        Industry: "Industrial Specialties",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ALNY",
        name: "Alnylam Pharmaceuticals, Inc.",
        lastsale: 77.59,
        MarketCap: 8270000000,
        IPOyear: 2004,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ALXN",
        name: "Alexion Pharmaceuticals, Inc.",
        lastsale: 113.29,
        MarketCap: 25400000000,
        IPOyear: 1996,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "AMAT",
        name: "Applied Materials, Inc.",
        lastsale: 49.37,
        MarketCap: 46220000000,
        IPOyear: 1972,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "AMGN",
        name: "Amgen Inc.",
        lastsale: 186.58,
        MarketCap: 113800000000,
        IPOyear: 1983,
        Sector: "Health Care",
        Industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
        Exchange: "NASDAQ"
      },
      {
        symbol: "AMTD",
        name: "TD Ameritrade Holding Corporation",
        lastsale: 51.1,
        MarketCap: 28270000000,
        IPOyear: 1997,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NASDAQ"
      },
      {
        symbol: "AMZN",
        name: "Amazon.com, Inc.",
        lastsale: 1866.78,
        MarketCap: 923410000000,
        IPOyear: 1997,
        Sector: "Consumer Services",
        Industry: "Catalog/Specialty Distribution",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ANSS",
        name: "ANSYS, Inc.",
        lastsale: 203.12,
        MarketCap: 17050000000,
        IPOyear: 1996,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ARGX",
        name: "argenx SE",
        lastsale: 140.46,
        MarketCap: 5340000000,
        IPOyear: 2017,
        Sector: "Health Care",
        Industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ASML",
        name: "ASML Holding N.V.",
        lastsale: 222.81,
        MarketCap: 93830000000,
        IPOyear: 1995,
        Sector: "Technology",
        Industry: "Industrial Machinery/Components",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ASND",
        name: "Ascendis Pharma A/S",
        lastsale: 115.76,
        MarketCap: 5500000000,
        IPOyear: 2015,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "AVGO",
        name: "Broadcom Inc.",
        lastsale: 289.99,
        MarketCap: 115440000000,
        IPOyear: 2009,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "AZPN",
        name: "Aspen Technology, Inc.",
        lastsale: 131.87,
        MarketCap: 9090000000,
        IPOyear: 1994,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "BGNE",
        name: "BeiGene, Ltd.",
        lastsale: 137.34,
        MarketCap: 8230000000,
        IPOyear: 2016,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "BIDU",
        name: "Baidu, Inc.",
        lastsale: 111.7,
        MarketCap: 39100000000,
        IPOyear: 2005,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "BLUE",
        name: "bluebird bio, Inc.",
        lastsale: 131.23,
        MarketCap: 7230000000,
        IPOyear: 2013,
        Sector: "Health Care",
        Industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
        Exchange: "NASDAQ"
      },
      {
        symbol: "BMRN",
        name: "BioMarin Pharmaceutical Inc.",
        lastsale: 79.32,
        MarketCap: 14200000000,
        IPOyear: 1999,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "BYND",
        name: "Beyond Meat, Inc.",
        lastsale: 196.51,
        MarketCap: 11830000000,
        IPOyear: 2019,
        Sector: "Consumer Non-Durables",
        Industry: "Packaged Foods",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CACC",
        name: "Credit Acceptance Corporation",
        lastsale: 478.03,
        MarketCap: 8990000000,
        IPOyear: 1992,
        Sector: "Finance",
        Industry: "Finance: Consumer Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CASY",
        name: "Caseys General Stores, Inc.",
        lastsale: 161.91,
        MarketCap: 5950000000,
        IPOyear: 1983,
        Sector: "Consumer Durables",
        Industry: "Automotive Aftermarket",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CDW",
        name: "CDW Corporation",
        lastsale: 118.16,
        MarketCap: 17250000000,
        IPOyear: 2013,
        Sector: "Consumer Services",
        Industry: "Catalog/Specialty Distribution",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CELG",
        name: "Celgene Corporation",
        lastsale: 91.86,
        MarketCap: 65100000000,
        IPOyear: 1987,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CERN",
        name: "Cerner Corporation",
        lastsale: 71.65,
        MarketCap: 22810000000,
        IPOyear: 1986,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CG",
        name: "The Carlyle Group L.P.",
        lastsale: 23.85,
        MarketCap: 8030000000,
        IPOyear: 2012,
        Sector: "Finance",
        Industry: "Investment Managers",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CGNX",
        name: "Cognex Corporation",
        lastsale: 44.01,
        MarketCap: 7510000000,
        IPOyear: 1989,
        Sector: "Capital Goods",
        Industry: "Industrial Machinery/Components",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CHKP",
        name: "Check Point Software Technologies Ltd.",
        lastsale: 111.95,
        MarketCap: 17040000000,
        IPOyear: 1996,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CHRW",
        name: "C.H. Robinson Worldwide, Inc.",
        lastsale: 83.73,
        MarketCap: 11430000000,
        IPOyear: 1997,
        Sector: "Transportation",
        Industry: "Oil Refining/Marketing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CME",
        name: "CME Group Inc.",
        lastsale: 194.42,
        MarketCap: 69600000000,
        IPOyear: 2002,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NASDAQ"
      },
      {
        symbol: "COLM",
        name: "Columbia Sportswear Company",
        lastsale: 105.98,
        MarketCap: 7240000000,
        IPOyear: 1998,
        Sector: "Consumer Non-Durables",
        Industry: "Apparel",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CONE",
        name: "CyrusOne Inc",
        lastsale: 57.4,
        MarketCap: 6500000000,
        IPOyear: 2013,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NASDAQ"
      },
      {
        symbol: "COUP",
        name: "Coupa Software Incorporated",
        lastsale: 135.71,
        MarketCap: 8380000000,
        IPOyear: 2016,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CPRT",
        name: "Copart, Inc.",
        lastsale: 77.53,
        MarketCap: 17760000000,
        IPOyear: 1994,
        Sector: "Consumer Durables",
        Industry: "Automotive Aftermarket",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CREE",
        name: "Cree, Inc.",
        lastsale: 62.18,
        MarketCap: 6540000000,
        IPOyear: 1993,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CSCO",
        name: "Cisco Systems, Inc.",
        lastsale: 55.4,
        MarketCap: 237150000000,
        IPOyear: 1990,
        Sector: "Technology",
        Industry: "Computer Communications Equipment",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CSGP",
        name: "CoStar Group, Inc.",
        lastsale: 615.4,
        MarketCap: 22490000000,
        IPOyear: 1998,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CTAS",
        name: "Cintas Corporation",
        lastsale: 260.44,
        MarketCap: 26690000000,
        IPOyear: 1983,
        Sector: "Consumer Non-Durables",
        Industry: "Apparel",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CTRP",
        name: "Ctrip.com International, Ltd.",
        lastsale: 38.98,
        MarketCap: 21560000000,
        IPOyear: 2003,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CTSH",
        name: "Cognizant Technology Solutions Corporation",
        lastsale: 65.14,
        MarketCap: 37080000000,
        IPOyear: 1998,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CTXS",
        name: "Citrix Systems, Inc.",
        lastsale: 94.24,
        MarketCap: 12410000000,
        IPOyear: 1995,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CY",
        name: "Cypress Semiconductor Corporation",
        lastsale: 22.97,
        MarketCap: 8480000000,
        IPOyear: 1986,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CYBR",
        name: "CyberArk Software Ltd.",
        lastsale: 138.88,
        MarketCap: 5240000000,
        IPOyear: 2014,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "CZR",
        name: "Caesars Entertainment Corporation",
        lastsale: 11.84,
        MarketCap: 7980000000,
        IPOyear: 2012,
        Sector: "Consumer Services",
        Industry: "Hotels/Resorts",
        Exchange: "NASDAQ"
      },
      {
        symbol: "DBX",
        name: "Dropbox, Inc.",
        lastsale: 23.56,
        MarketCap: 9690000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "DISH",
        name: "DISH Network Corporation",
        lastsale: 33.86,
        MarketCap: 15910000000,
        IPOyear: 1995,
        Sector: "Consumer Services",
        Industry: "Television Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "DLTR",
        name: "Dollar Tree, Inc.",
        lastsale: 101.75,
        MarketCap: 24170000000,
        IPOyear: 1995,
        Sector: "Consumer Services",
        Industry: "Department/Specialty Retail Stores",
        Exchange: "NASDAQ"
      },
      {
        symbol: "DNKN",
        name: "Dunkin&#39; Brands Group, Inc.",
        lastsale: 80.16,
        MarketCap: 6620000000,
        IPOyear: 2011,
        Sector: "Consumer Services",
        Industry: "Restaurants",
        Exchange: "NASDAQ"
      },
      {
        symbol: "DOCU",
        name: "DocuSign, Inc.",
        lastsale: 51.72,
        MarketCap: 8990000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "DXCM",
        name: "DexCom, Inc.",
        lastsale: 156.87,
        MarketCap: 14280000000,
        IPOyear: 2005,
        Sector: "Health Care",
        Industry: "Medical/Dental Instruments",
        Exchange: "NASDAQ"
      },
      {
        symbol: "EBAY",
        name: "eBay Inc.",
        lastsale: 41.19,
        MarketCap: 34550000000,
        IPOyear: 1998,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "EEFT",
        name: "Euronet Worldwide, Inc.",
        lastsale: 155.91,
        MarketCap: 8100000000,
        IPOyear: 1997,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ENTG",
        name: "Entegris, Inc.",
        lastsale: 43.51,
        MarketCap: 5880000000,
        IPOyear: 2000,
        Sector: "Consumer Non-Durables",
        Industry: "Plastic Products",
        Exchange: "NASDAQ"
      },
      {
        symbol: "EQIX",
        name: "Equinix, Inc.",
        lastsale: 502.1,
        MarketCap: 42210000000,
        IPOyear: 2000,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ETSY",
        name: "Etsy, Inc.",
        lastsale: 67.02,
        MarketCap: 8050000000,
        IPOyear: 2015,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "EXAS",
        name: "Exact Sciences Corporation",
        lastsale: 115.11,
        MarketCap: 14910000000,
        IPOyear: 2001,
        Sector: "Health Care",
        Industry: "Biotechnology: Commercial Physical & Biological Resarch",
        Exchange: "NASDAQ"
      },
      {
        symbol: "EXEL",
        name: "Exelixis, Inc.",
        lastsale: 21.27,
        MarketCap: 6420000000,
        IPOyear: 2000,
        Sector: "Health Care",
        Industry: "Biotechnology: Commercial Physical & Biological Resarch",
        Exchange: "NASDAQ"
      },
      {
        symbol: "FANG",
        name: "Diamondback Energy, Inc.",
        lastsale: 103.43,
        MarketCap: 17030000000,
        IPOyear: 2012,
        Sector: "Energy",
        Industry: "Oil & Gas Production",
        Exchange: "NASDAQ"
      },
      {
        symbol: "FAST",
        name: "Fastenal Company",
        lastsale: 30.8,
        MarketCap: 17660000000,
        IPOyear: 1987,
        Sector: "Consumer Services",
        Industry: "RETAIL: Building Materials",
        Exchange: "NASDAQ"
      },
      {
        symbol: "FB",
        name: "Facebook, Inc.",
        lastsale: 194.23,
        MarketCap: 554130000000,
        IPOyear: 2012,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "FFIV",
        name: "F5 Networks, Inc.",
        lastsale: 146.72,
        MarketCap: 8820000000,
        IPOyear: 1999,
        Sector: "Technology",
        Industry: "Computer Communications Equipment",
        Exchange: "NASDAQ"
      },
      {
        symbol: "FISV",
        name: "Fiserv, Inc.",
        lastsale: 105.43,
        MarketCap: 71640000000,
        IPOyear: 1986,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "FIVE",
        name: "Five Below, Inc.",
        lastsale: 117.46,
        MarketCap: 6570000000,
        IPOyear: 2012,
        Sector: "Consumer Services",
        Industry: "Department/Specialty Retail Stores",
        Exchange: "NASDAQ"
      },
      {
        symbol: "FLEX",
        name: "Flex Ltd.",
        lastsale: 11.15,
        MarketCap: 5740000000,
        IPOyear: 1994,
        Sector: "Technology",
        Industry: "Electrical Products",
        Exchange: "NASDAQ"
      },
      {
        symbol: "FLIR",
        name: "FLIR Systems, Inc.",
        lastsale: 49.66,
        MarketCap: 6740000000,
        IPOyear: 1993,
        Sector: "Capital Goods",
        Industry: "Industrial Machinery/Components",
        Exchange: "NASDAQ"
      },
      {
        symbol: "FSLR",
        name: "First Solar, Inc.",
        lastsale: 64.49,
        MarketCap: 6790000000,
        IPOyear: 2006,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "FTNT",
        name: "Fortinet, Inc.",
        lastsale: 80.31,
        MarketCap: 13710000000,
        IPOyear: 2009,
        Sector: "Technology",
        Industry: "Computer peripheral equipment",
        Exchange: "NASDAQ"
      },
      {
        symbol: "GDS",
        name: "GDS Holdings Limited",
        lastsale: 41.18,
        MarketCap: 5180000000,
        IPOyear: 2016,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "GH",
        name: "Guardant Health, Inc.",
        lastsale: 93.99,
        MarketCap: 8190000000,
        IPOyear: 2018,
        Sector: "Health Care",
        Industry: "Medical Specialities",
        Exchange: "NASDAQ"
      },
      {
        symbol: "GILD",
        name: "Gilead Sciences, Inc.",
        lastsale: 65.52,
        MarketCap: 83010000000,
        IPOyear: 1992,
        Sector: "Health Care",
        Industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
        Exchange: "NASDAQ"
      },
      {
        symbol: "GLPG",
        name: "Galapagos NV",
        lastsale: 173.4,
        MarketCap: 9510000000,
        IPOyear: 2015,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "GMAB",
        name: "Genmab A/S",
        lastsale: 18.29,
        MarketCap: 11850000000,
        IPOyear: 2019,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "GOOG",
        name: "Alphabet Inc.",
        lastsale: 1216.68,
        MarketCap: 843640000000,
        IPOyear: 2004,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "GRMN",
        name: "Garmin Ltd.",
        lastsale: 78.59,
        MarketCap: 14920000000,
        IPOyear: 2000,
        Sector: "Capital Goods",
        Industry: "Industrial Machinery/Components",
        Exchange: "NASDAQ"
      },
      {
        symbol: "HDS",
        name: "HD Supply Holdings, Inc.",
        lastsale: 40.51,
        MarketCap: 6920000000,
        IPOyear: 2013,
        Sector: "Consumer Services",
        Industry: "Office Equipment/Supplies/Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "HOLX",
        name: "Hologic, Inc.",
        lastsale: 51.25,
        MarketCap: 13740000000,
        IPOyear: 1990,
        Sector: "Health Care",
        Industry: "Medical Electronics",
        Exchange: "NASDAQ"
      },
      {
        symbol: "HQY",
        name: "HealthEquity, Inc.",
        lastsale: 81.98,
        MarketCap: 5140000000,
        IPOyear: 2014,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "HSIC",
        name: "Henry Schein, Inc.",
        lastsale: 66.54,
        MarketCap: 9920000000,
        IPOyear: 1995,
        Sector: "Health Care",
        Industry: "Medical Specialities",
        Exchange: "NASDAQ"
      },
      {
        symbol: "HTHT",
        name: "Huazhu Group Limited",
        lastsale: 32.76,
        MarketCap: 9620000000,
        IPOyear: 2010,
        Sector: "Consumer Services",
        Industry: "Hotels/Resorts",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ICLR",
        name: "ICON plc",
        lastsale: 156.17,
        MarketCap: 8430000000,
        IPOyear: 1998,
        Sector: "Health Care",
        Industry: "Biotechnology: Commercial Physical & Biological Resarch",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ICUI",
        name: "ICU Medical, Inc.",
        lastsale: 254.44,
        MarketCap: 5250000000,
        IPOyear: 1992,
        Sector: "Health Care",
        Industry: "Medical/Dental Instruments",
        Exchange: "NASDAQ"
      },
      {
        symbol: "IDXX",
        name: "IDEXX Laboratories, Inc.",
        lastsale: 282.05,
        MarketCap: 24260000000,
        IPOyear: 1991,
        Sector: "Health Care",
        Industry: "Biotechnology: In Vitro & In Vivo Diagnostic Substances",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ILMN",
        name: "Illumina, Inc.",
        lastsale: 299.38,
        MarketCap: 44010000000,
        IPOyear: 2000,
        Sector: "Capital Goods",
        Industry: "Biotechnology: Laboratory Analytical Instruments",
        Exchange: "NASDAQ"
      },
      {
        symbol: "INFO",
        name: "IHS Markit Ltd.",
        lastsale: 64.42,
        MarketCap: 25840000000,
        IPOyear: 1996,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "INTU",
        name: "Intuit Inc.",
        lastsale: 277.31,
        MarketCap: 71890000000,
        IPOyear: 1993,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "IPGP",
        name: "IPG Photonics Corporation",
        lastsale: 131.01,
        MarketCap: 6970000000,
        IPOyear: 2006,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "IQ",
        name: "iQIYI, Inc.",
        lastsale: 18.59,
        MarketCap: 13520000000,
        IPOyear: 2018,
        Sector: "Consumer Services",
        Industry: "Consumer Electronics/Video Chains",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ISRG",
        name: "Intuitive Surgical, Inc.",
        lastsale: 519.51,
        MarketCap: 59880000000,
        IPOyear: 2000,
        Sector: "Health Care",
        Industry: "Industrial Specialties",
        Exchange: "NASDAQ"
      },
      {
        symbol: "JAZZ",
        name: "Jazz Pharmaceuticals plc",
        lastsale: 139.38,
        MarketCap: 7950000000,
        IPOyear: 2007,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "JBLU",
        name: "JetBlue Airways Corporation",
        lastsale: 19.23,
        MarketCap: 5700000000,
        IPOyear: 2002,
        Sector: "Transportation",
        Industry: "Air Freight/Delivery Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "JD",
        name: "JD.com, Inc.",
        lastsale: 29.91,
        MarketCap: 43300000000,
        IPOyear: 2014,
        Sector: "Consumer Services",
        Industry: "Other Specialty Stores",
        Exchange: "NASDAQ"
      },
      {
        symbol: "JKHY",
        name: "Jack Henry & Associates, Inc.",
        lastsale: 139.7,
        MarketCap: 10790000000,
        IPOyear: 1985,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "KLAC",
        name: "KLA Corporation",
        lastsale: 136.32,
        MarketCap: 22030000000,
        IPOyear: 1980,
        Sector: "Capital Goods",
        Industry: "Electronic Components",
        Exchange: "NASDAQ"
      },
      {
        symbol: "LAMR",
        name: "Lamar Advertising Company",
        lastsale: 80.92,
        MarketCap: 8090000000,
        IPOyear: 1996,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NASDAQ"
      },
      {
        symbol: "LK",
        name: "Luckin Coffee Inc.",
        lastsale: 24.29,
        MarketCap: 5720000000,
        IPOyear: 2019,
        Sector: "Consumer Services",
        Industry: "Restaurants",
        Exchange: "NASDAQ"
      },
      {
        symbol: "LOGI",
        name: "Logitech International S.A.",
        lastsale: 41.24,
        MarketCap: 6870000000,
        IPOyear: 1997,
        Sector: "Technology",
        Industry: "Computer peripheral equipment",
        Exchange: "NASDAQ"
      },
      {
        symbol: "LOPE",
        name: "Grand Canyon Education, Inc.",
        lastsale: 108.77,
        MarketCap: 5250000000,
        IPOyear: 2008,
        Sector: "Consumer Services",
        Industry: "Other Consumer Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "LPLA",
        name: "LPL Financial Holdings Inc.",
        lastsale: 83.87,
        MarketCap: 6940000000,
        IPOyear: 2010,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NASDAQ"
      },
      {
        symbol: "LRCX",
        name: "Lam Research Corporation",
        lastsale: 208.61,
        MarketCap: 31280000000,
        IPOyear: 1984,
        Sector: "Technology",
        Industry: "Industrial Machinery/Components",
        Exchange: "NASDAQ"
      },
      {
        symbol: "LULU",
        name: "lululemon athletica inc.",
        lastsale: 191.09,
        MarketCap: 24890000000,
        IPOyear: 2007,
        Sector: "Consumer Non-Durables",
        Industry: "Apparel",
        Exchange: "NASDAQ"
      },
      {
        symbol: "LYFT",
        name: "Lyft, Inc.",
        lastsale: 60.87,
        MarketCap: 17690000000,
        IPOyear: 2019,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MANH",
        name: "Manhattan Associates, Inc.",
        lastsale: 84.99,
        MarketCap: 5470000000,
        IPOyear: 1998,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MASI",
        name: "Masimo Corporation",
        lastsale: 157.85,
        MarketCap: 8420000000,
        IPOyear: 2007,
        Sector: "Health Care",
        Industry: "Biotechnology: Electromedical & Electrotherapeutic Apparatus",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MCHP",
        name: "Microchip Technology Incorporated",
        lastsale: 94.42,
        MarketCap: 22480000000,
        IPOyear: 1993,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MDB",
        name: "MongoDB, Inc.",
        lastsale: 143.22,
        MarketCap: 7920000000,
        IPOyear: 2017,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MDSO",
        name: "Medidata Solutions, Inc.",
        lastsale: 91.37,
        MarketCap: 5710000000,
        IPOyear: 2009,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MELI",
        name: "MercadoLibre, Inc.",
        lastsale: 621.42,
        MarketCap: 30890000000,
        IPOyear: 2007,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MKTX",
        name: "MarketAxess Holdings, Inc.",
        lastsale: 337.04,
        MarketCap: 12730000000,
        IPOyear: 2004,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MLNX",
        name: "Mellanox Technologies, Ltd.",
        lastsale: 112.62,
        MarketCap: 6170000000,
        IPOyear: 2007,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MOMO",
        name: "Momo Inc.",
        lastsale: 33.97,
        MarketCap: 7040000000,
        IPOyear: 2014,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MORN",
        name: "Morningstar, Inc.",
        lastsale: 151.98,
        MarketCap: 6500000000,
        IPOyear: 2005,
        Sector: "Finance",
        Industry: "Investment Managers",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MPWR",
        name: "Monolithic Power Systems, Inc.",
        lastsale: 148.16,
        MarketCap: 6380000000,
        IPOyear: 2004,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MRVL",
        name: "Marvell Technology Group Ltd.",
        lastsale: 26.26,
        MarketCap: 17360000000,
        IPOyear: 2000,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MSFT",
        name: "Microsoft Corporation",
        lastsale: 136.27,
        MarketCap: 1041510000000,
        IPOyear: 1986,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MSG",
        name: "The Madison Square Garden Company",
        lastsale: 290.04,
        MarketCap: 6890000000,
        IPOyear: 2015,
        Sector: "Consumer Services",
        Industry: "Services-Misc. Amusement & Recreation",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MTCH",
        name: "Match Group, Inc.",
        lastsale: 75.29,
        MarketCap: 21170000000,
        IPOyear: 2015,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "MXIM",
        name: "Maxim Integrated Products, Inc.",
        lastsale: 59.19,
        MarketCap: 16120000000,
        IPOyear: 1988,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "NATI",
        name: "National Instruments Corporation",
        lastsale: 41.76,
        MarketCap: 5510000000,
        IPOyear: 1995,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "NBIX",
        name: "Neurocrine Biosciences, Inc.",
        lastsale: 96.39,
        MarketCap: 8830000000,
        IPOyear: 1996,
        Sector: "Health Care",
        Industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
        Exchange: "NASDAQ"
      },
      {
        symbol: "NFLX",
        name: "Netflix, Inc.",
        lastsale: 322.99,
        MarketCap: 141420000000,
        IPOyear: 2002,
        Sector: "Consumer Services",
        Industry: "Consumer Electronics/Video Chains",
        Exchange: "NASDAQ"
      },
      {
        symbol: "NTAP",
        name: "NetApp, Inc.",
        lastsale: 58.49,
        MarketCap: 14040000000,
        IPOyear: 1995,
        Sector: "Technology",
        Industry: "Electronic Components",
        Exchange: "NASDAQ"
      },
      {
        symbol: "NVCR",
        name: "NovoCure Limited",
        lastsale: 83.22,
        MarketCap: 8170000000,
        IPOyear: 2015,
        Sector: "Health Care",
        Industry: "Medical/Dental Instruments",
        Exchange: "NASDAQ"
      },
      {
        symbol: "NVDA",
        name: "NVIDIA Corporation",
        lastsale: 168.72,
        MarketCap: 102750000000,
        IPOyear: 1999,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "NXPI",
        name: "NXP Semiconductors N.V.",
        lastsale: 103.39,
        MarketCap: 29480000000,
        IPOyear: 2010,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ODFL",
        name: "Old Dominion Freight Line, Inc.",
        lastsale: 166.98,
        MarketCap: 13520000000,
        IPOyear: 1991,
        Sector: "Transportation",
        Industry: "Trucking Freight/Courier Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "OKTA",
        name: "Okta, Inc.",
        lastsale: 130.83,
        MarketCap: 14930000000,
        IPOyear: 2017,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "OLLI",
        name: "Ollie&#39;s Bargain Outlet Holdings, Inc.",
        lastsale: 84.69,
        MarketCap: 5380000000,
        IPOyear: 2015,
        Sector: "Consumer Services",
        Industry: "Department/Specialty Retail Stores",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ORLY",
        name: "O&#39;Reilly Automotive, Inc.",
        lastsale: 380.76,
        MarketCap: 29200000000,
        IPOyear: 1993,
        Sector: "Consumer Services",
        Industry: "Other Specialty Stores",
        Exchange: "NASDAQ"
      },
      {
        symbol: "OTEX",
        name: "Open Text Corporation",
        lastsale: 42.63,
        MarketCap: 11500000000,
        IPOyear: 1996,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "PAYX",
        name: "Paychex, Inc.",
        lastsale: 83.05,
        MarketCap: 29840000000,
        IPOyear: 1983,
        Sector: "Consumer Services",
        Industry: "Diversified Commercial Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "PCTY",
        name: "Paylocity Holding Corporation",
        lastsale: 102.09,
        MarketCap: 5410000000,
        IPOyear: 2014,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "PDD",
        name: "Pinduoduo Inc.",
        lastsale: 22.27,
        MarketCap: 25890000000,
        IPOyear: 2018,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "PEGA",
        name: "Pegasystems Inc.",
        lastsale: 75.6,
        MarketCap: 5970000000,
        IPOyear: 1996,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "PFG",
        name: "Principal Financial Group Inc",
        lastsale: 58.04,
        MarketCap: 16170000000,
        IPOyear: 2001,
        Sector: "Finance",
        Industry: "Accident &Health Insurance",
        Exchange: "NASDAQ"
      },
      {
        symbol: "PFPT",
        name: "Proofpoint, Inc.",
        lastsale: 126.2,
        MarketCap: 7080000000,
        IPOyear: 2012,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "PODD",
        name: "Insulet Corporation",
        lastsale: 122.94,
        MarketCap: 7340000000,
        IPOyear: 2007,
        Sector: "Health Care",
        Industry: "Medical/Dental Instruments",
        Exchange: "NASDAQ"
      },
      {
        symbol: "POOL",
        name: "Pool Corporation",
        lastsale: 189.37,
        MarketCap: 7530000000,
        IPOyear: 1995,
        Sector: "Consumer Durables",
        Industry: "Industrial Specialties",
        Exchange: "NASDAQ"
      },
      {
        symbol: "PRAH",
        name: "PRA Health Sciences, Inc.",
        lastsale: 99.91,
        MarketCap: 6560000000,
        IPOyear: 2014,
        Sector: "Health Care",
        Industry: "Biotechnology: Commercial Physical & Biological Resarch",
        Exchange: "NASDAQ"
      },
      {
        symbol: "QCOM",
        name: "QUALCOMM Incorporated",
        lastsale: 73.16,
        MarketCap: 88940000000,
        IPOyear: 1991,
        Sector: "Technology",
        Industry: "Radio And Television Broadcasting And Communications Equipment",
        Exchange: "NASDAQ"
      },
      {
        symbol: "REG",
        name: "Regency Centers Corporation",
        lastsale: 66.7,
        MarketCap: 11170000000,
        IPOyear: 1993,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NASDAQ"
      },
      {
        symbol: "REGN",
        name: "Regeneron Pharmaceuticals, Inc.",
        lastsale: 304.76,
        MarketCap: 33410000000,
        IPOyear: 1991,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ROKU",
        name: "Roku, Inc.",
        lastsale: 103.33,
        MarketCap: 11710000000,
        IPOyear: 2017,
        Sector: "Consumer Services",
        Industry: "Television Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ROST",
        name: "Ross Stores, Inc.",
        lastsale: 106.03,
        MarketCap: 38670000000,
        IPOyear: 1985,
        Sector: "Consumer Services",
        Industry: "Clothing/Shoe/Accessory Stores",
        Exchange: "NASDAQ"
      },
      {
        symbol: "RP",
        name: "RealPage, Inc.",
        lastsale: 62.48,
        MarketCap: 5910000000,
        IPOyear: 2010,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "RYAAY",
        name: "Ryanair Holdings plc",
        lastsale: 62.13,
        MarketCap: 13910000000,
        IPOyear: 1997,
        Sector: "Transportation",
        Industry: "Air Freight/Delivery Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SABR",
        name: "Sabre Corporation",
        lastsale: 23.51,
        MarketCap: 6460000000,
        IPOyear: 2014,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SAGE",
        name: "Sage Therapeutics, Inc.",
        lastsale: 160.34,
        MarketCap: 8200000000,
        IPOyear: 2014,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SBAC",
        name: "SBA Communications Corporation",
        lastsale: 245.41,
        MarketCap: 27750000000,
        IPOyear: 1999,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SBNY",
        name: "Signature Bank",
        lastsale: 127.46,
        MarketCap: 7020000000,
        IPOyear: 2004,
        Sector: "Finance",
        Industry: "Major Banks",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SBUX",
        name: "Starbucks Corporation",
        lastsale: 94.69,
        MarketCap: 114690000000,
        IPOyear: 1992,
        Sector: "Consumer Services",
        Industry: "Restaurants",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SEIC",
        name: "SEI Investments Company",
        lastsale: 59.59,
        MarketCap: 9000000000,
        IPOyear: 1981,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SGEN",
        name: "Seattle Genetics, Inc.",
        lastsale: 75.71,
        MarketCap: 12240000000,
        IPOyear: 2001,
        Sector: "Health Care",
        Industry: "Biotechnology: Biological Products (No Diagnostic Substances)",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SNPS",
        name: "Synopsys, Inc.",
        lastsale: 132.76,
        MarketCap: 19900000000,
        IPOyear: 1992,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SPLK",
        name: "Splunk Inc.",
        lastsale: 135.31,
        MarketCap: 20320000000,
        IPOyear: 2012,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SSNC",
        name: "SS&C Technologies Holdings, Inc.",
        lastsale: 47.95,
        MarketCap: 12130000000,
        IPOyear: 2010,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "STLD",
        name: "Steel Dynamics, Inc.",
        lastsale: 31.51,
        MarketCap: 7000000000,
        IPOyear: 1996,
        Sector: "Basic Industries",
        Industry: "Steel/Iron Ore",
        Exchange: "NASDAQ"
      },
      {
        symbol: "STNE",
        name: "StoneCo Ltd.",
        lastsale: 35.01,
        MarketCap: 10390000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "STX",
        name: "Seagate Technology PLC",
        lastsale: 46.31,
        MarketCap: 12820000000,
        IPOyear: 2002,
        Sector: "Technology",
        Industry: "Electronic Components",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SYMC",
        name: "Symantec Corporation",
        lastsale: 21.56,
        MarketCap: 13310000000,
        IPOyear: 1989,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "SYNH",
        name: "Syneos Health, Inc.",
        lastsale: 51.09,
        MarketCap: 5300000000,
        IPOyear: 2014,
        Sector: "Health Care",
        Industry: "Biotechnology: Commercial Physical & Biological Resarch",
        Exchange: "NASDAQ"
      },
      {
        symbol: "TEAM",
        name: "Atlassian Corporation Plc",
        lastsale: 140.12,
        MarketCap: 33780000000,
        IPOyear: 2015,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "TRMB",
        name: "Trimble Inc.",
        lastsale: 42.26,
        MarketCap: 10630000000,
        IPOyear: 1990,
        Sector: "Capital Goods",
        Industry: "Industrial Machinery/Components",
        Exchange: "NASDAQ"
      },
      {
        symbol: "TROW",
        name: "T. Rowe Price Group, Inc.",
        lastsale: 113.39,
        MarketCap: 26710000000,
        IPOyear: 1986,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NASDAQ"
      },
      {
        symbol: "TSCO",
        name: "Tractor Supply Company",
        lastsale: 108.81,
        MarketCap: 13130000000,
        IPOyear: 1994,
        Sector: "Consumer Services",
        Industry: "RETAIL: Building Materials",
        Exchange: "NASDAQ"
      },
      {
        symbol: "TSLA",
        name: "Tesla, Inc.",
        lastsale: 241.61,
        MarketCap: 43280000000,
        IPOyear: 2010,
        Sector: "Capital Goods",
        Industry: "Auto Manufacturing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "TTD",
        name: "The Trade Desk, Inc.",
        lastsale: 263.31,
        MarketCap: 11720000000,
        IPOyear: 2016,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "TTWO",
        name: "Take-Two Interactive Software, Inc.",
        lastsale: 122.52,
        MarketCap: 13870000000,
        IPOyear: 1997,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NASDAQ"
      },
      {
        symbol: "TW",
        name: "Tradeweb Markets Inc.",
        lastsale: 47.36,
        MarketCap: 10520000000,
        IPOyear: 2019,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NASDAQ"
      },
      {
        symbol: "UBNT",
        name: "Ubiquiti Networks, Inc.",
        lastsale: 128.73,
        MarketCap: 9090000000,
        IPOyear: 2011,
        Sector: "Technology",
        Industry: "Radio And Television Broadcasting And Communications Equipment",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ULTA",
        name: "Ulta Beauty, Inc.",
        lastsale: 349.25,
        MarketCap: 20420000000,
        IPOyear: 2007,
        Sector: "Consumer Services",
        Industry: "Other Specialty Stores",
        Exchange: "NASDAQ"
      },
      {
        symbol: "VRSK",
        name: "Verisk Analytics, Inc.",
        lastsale: 151.72,
        MarketCap: 24830000000,
        IPOyear: 2009,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "VRSN",
        name: "VeriSign, Inc.",
        lastsale: 211.09,
        MarketCap: 24990000000,
        IPOyear: 1998,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "VRTX",
        name: "Vertex Pharmaceuticals Incorporated",
        lastsale: 166.62,
        MarketCap: 42670000000,
        IPOyear: 1991,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NASDAQ"
      },
      {
        symbol: "WB",
        name: "Weibo Corporation",
        lastsale: 39.17,
        MarketCap: 8810000000,
        IPOyear: 2014,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "WIX",
        name: "Wix.com Ltd.",
        lastsale: 148.52,
        MarketCap: 7410000000,
        IPOyear: 2013,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "WYNN",
        name: "Wynn Resorts, Limited",
        lastsale: 130.07,
        MarketCap: 14000000000,
        IPOyear: 2002,
        Sector: "Consumer Services",
        Industry: "Hotels/Resorts",
        Exchange: "NASDAQ"
      },
      {
        symbol: "XLNX",
        name: "Xilinx, Inc.",
        lastsale: 114.21,
        MarketCap: 28850000000,
        IPOyear: 1990,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NASDAQ"
      },
      {
        symbol: "XRAY",
        name: "DENTSPLY SIRONA Inc.",
        lastsale: 54.45,
        MarketCap: 12740000000,
        IPOyear: 1987,
        Sector: "Health Care",
        Industry: "Medical/Dental Instruments",
        Exchange: "NASDAQ"
      },
      {
        symbol: "YNDX",
        name: "Yandex N.V.",
        lastsale: 39.22,
        MarketCap: 12820000000,
        IPOyear: 2011,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "YY",
        name: "YY Inc.",
        lastsale: 64.19,
        MarketCap: 5060000000,
        IPOyear: 2012,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ZBRA",
        name: "Zebra Technologies Corporation",
        lastsale: 210.89,
        MarketCap: 11380000000,
        IPOyear: 1991,
        Sector: "Technology",
        Industry: "Industrial Machinery/Components",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ZG",
        name: "Zillow Group, Inc.",
        lastsale: 49.84,
        MarketCap: 10230000000,
        IPOyear: 2011,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ZM",
        name: "Zoom Video Communications, Inc.",
        lastsale: 95.51,
        MarketCap: 26020000000,
        IPOyear: 2019,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ZNGA",
        name: "Zynga Inc.",
        lastsale: 6.38,
        MarketCap: 5970000000,
        IPOyear: 2011,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "ZS",
        name: "Zscaler, Inc.",
        lastsale: 84.27,
        MarketCap: 10590000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NASDAQ"
      },
      {
        symbol: "A",
        name: "Agilent Technologies, Inc.",
        lastsale: 69.41,
        MarketCap: 21930000000,
        IPOyear: 1999,
        Sector: "Capital Goods",
        Industry: "Biotechnology: Laboratory Analytical Instruments",
        Exchange: "NYSE"
      },
      {
        symbol: "ABBV",
        name: "AbbVie Inc.",
        lastsale: 66.62,
        MarketCap: 98490000000,
        IPOyear: 2012,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NYSE"
      },
      {
        symbol: "ABEV",
        name: "Ambev S.A.",
        lastsale: 5.27,
        MarketCap: 82880000000,
        IPOyear: 2013,
        Sector: "Consumer Non-Durables",
        Industry: "Beverages (Production/Distribution)",
        Exchange: "NYSE"
      },
      {
        symbol: "ACB",
        name: "Aurora Cannabis Inc.",
        lastsale: 6.25,
        MarketCap: 6360000000,
        IPOyear: 2018,
        Sector: "Consumer Durables",
        Industry: "Specialty Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "ACC",
        name: "American Campus Communities Inc",
        lastsale: 46.75,
        MarketCap: 6420000000,
        IPOyear: 2004,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "ACH",
        name: "Aluminum Corporation of China Limited",
        lastsale: 8.05,
        MarketCap: 5480000000,
        IPOyear: 2001,
        Sector: "Basic Industries",
        Industry: "Aluminum",
        Exchange: "NYSE"
      },
      {
        symbol: "ACM",
        name: "AECOM",
        lastsale: 35.95,
        MarketCap: 5660000000,
        IPOyear: 2007,
        Sector: "Consumer Services",
        Industry: "Military/Government/Technical",
        Exchange: "NYSE"
      },
      {
        symbol: "ACN",
        name: "Accenture plc",
        lastsale: 192.58,
        MarketCap: 122820000000,
        IPOyear: 2001,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NYSE"
      },
      {
        symbol: "ADS",
        name: "Alliance Data Systems Corporation",
        lastsale: 156.92,
        MarketCap: 8220000000,
        IPOyear: 2001,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NYSE"
      },
      {
        symbol: "AER",
        name: "Aercap Holdings N.V.",
        lastsale: 54.53,
        MarketCap: 7450000000,
        IPOyear: 2006,
        Sector: "Technology",
        Industry: "Diversified Commercial Services",
        Exchange: "NYSE"
      },
      {
        symbol: "AGN",
        name: "Allergan plc.",
        lastsale: 160.5,
        MarketCap: 52620000000,
        IPOyear: 2013,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NYSE"
      },
      {
        symbol: "AGR",
        name: "Avangrid, Inc.",
        lastsale: 50.55,
        MarketCap: 15620000000,
        IPOyear: 2015,
        Sector: "Public Utilities",
        Industry: "Electric Utilities: Central",
        Exchange: "NYSE"
      },
      {
        symbol: "AIV",
        name: "Apartment Investment and Management Company",
        lastsale: 49.54,
        MarketCap: 7370000000,
        IPOyear: 1994,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "AIZ",
        name: "Assurant, Inc.",
        lastsale: 113.36,
        MarketCap: 6970000000,
        IPOyear: 2004,
        Sector: "Finance",
        Industry: "Accident &Health Insurance",
        Exchange: "NYSE"
      },
      {
        symbol: "ALC",
        name: "Alcon Inc.",
        lastsale: 58.75,
        MarketCap: 28710000000,
        IPOyear: 2019,
        Sector: "Health Care",
        Industry: "Ophthalmic Goods",
        Exchange: "NYSE"
      },
      {
        symbol: "ALLE",
        name: "Allegion plc",
        lastsale: 103.54,
        MarketCap: 9670000000,
        IPOyear: 2013,
        Sector: "Consumer Services",
        Industry: "Diversified Commercial Services",
        Exchange: "NYSE"
      },
      {
        symbol: "ALLY",
        name: "Ally Financial Inc.",
        lastsale: 32.91,
        MarketCap: 12930000000,
        IPOyear: 2014,
        Sector: "Finance",
        Industry: "Major Banks",
        Exchange: "NYSE"
      },
      {
        symbol: "ALSN",
        name: "Allison Transmission Holdings, Inc.",
        lastsale: 45.95,
        MarketCap: 5530000000,
        IPOyear: 2012,
        Sector: "Capital Goods",
        Industry: "Auto Parts:O.E.M.",
        Exchange: "NYSE"
      },
      {
        symbol: "AMCR",
        name: "Amcor plc",
        lastsale: 10.6,
        MarketCap: 17210000000,
        IPOyear: 2019,
        Sector: "Consumer Durables",
        Industry: "Miscellaneous manufacturing industries",
        Exchange: "NYSE"
      },
      {
        symbol: "AMH",
        name: "American Homes 4 Rent",
        lastsale: 24.21,
        MarketCap: 7270000000,
        IPOyear: 2013,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "ANET",
        name: "Arista Networks, Inc.",
        lastsale: 273.45,
        MarketCap: 20950000000,
        IPOyear: 2014,
        Sector: "Technology",
        Industry: "Computer Communications Equipment",
        Exchange: "NYSE"
      },
      {
        symbol: "APO",
        name: "Apollo Global Management, LLC",
        lastsale: 33,
        MarketCap: 13290000000,
        IPOyear: 2011,
        Sector: "Finance",
        Industry: "Investment Managers",
        Exchange: "NYSE"
      },
      {
        symbol: "APTV",
        name: "Aptiv PLC",
        lastsale: 87.65,
        MarketCap: 22600000000,
        IPOyear: 2011,
        Sector: "Capital Goods",
        Industry: "Auto Parts:O.E.M.",
        Exchange: "NYSE"
      },
      {
        symbol: "AQN",
        name: "Algonquin Power & Utilities Corp.",
        lastsale: 12.45,
        MarketCap: 6110000000,
        IPOyear: 2016,
        Sector: "Public Utilities",
        Industry: "Electric Utilities: Central",
        Exchange: "NYSE"
      },
      {
        symbol: "ARES",
        name: "Ares Management Corporation",
        lastsale: 29.25,
        MarketCap: 6440000000,
        IPOyear: 2014,
        Sector: "Finance",
        Industry: "Investment Managers",
        Exchange: "NYSE"
      },
      {
        symbol: "ARMK",
        name: "Aramark",
        lastsale: 36.19,
        MarketCap: 8920000000,
        IPOyear: 2013,
        Sector: "Consumer Services",
        Industry: "Restaurants",
        Exchange: "NYSE"
      },
      {
        symbol: "ASX",
        name: "ASE Technology Holding Co., Ltd.",
        lastsale: 4.38,
        MarketCap: 9310000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NYSE"
      },
      {
        symbol: "ATH",
        name: "Athene Holding Ltd.",
        lastsale: 40.86,
        MarketCap: 7910000000,
        IPOyear: 2016,
        Sector: "Finance",
        Industry: "Life Insurance",
        Exchange: "NYSE"
      },
      {
        symbol: "ATHM",
        name: "Autohome Inc.",
        lastsale: 85,
        MarketCap: 10030000000,
        IPOyear: 2013,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NYSE"
      },
      {
        symbol: "ATUS",
        name: "Altice USA, Inc.",
        lastsale: 25.81,
        MarketCap: 17420000000,
        IPOyear: 2017,
        Sector: "Consumer Services",
        Industry: "Television Services",
        Exchange: "NYSE"
      },
      {
        symbol: "AVAL",
        name: "Grupo Aval Acciones y Valores S.A.",
        lastsale: 7.51,
        MarketCap: 8370000000,
        IPOyear: 2014,
        Sector: "Finance",
        Industry: "Commercial Banks",
        Exchange: "NYSE"
      },
      {
        symbol: "AVLR",
        name: "Avalara, Inc.",
        lastsale: 81.48,
        MarketCap: 5700000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "AVTR",
        name: "Avantor, Inc.",
        lastsale: 17.59,
        MarketCap: 9400000000,
        IPOyear: 2019,
        Sector: "Capital Goods",
        Industry: "Biotechnology: Laboratory Analytical Instruments",
        Exchange: "NYSE"
      },
      {
        symbol: "AWK",
        name: "American Water Works",
        lastsale: 114.78,
        MarketCap: 20440000000,
        IPOyear: 2008,
        Sector: "Public Utilities",
        Industry: "Water Supply",
        Exchange: "NYSE"
      },
      {
        symbol: "AXS",
        name: "Axis Capital Holdings Limited",
        lastsale: 63.67,
        MarketCap: 5340000000,
        IPOyear: 2003,
        Sector: "Finance",
        Industry: "Property-Casualty Insurers",
        Exchange: "NYSE"
      },
      {
        symbol: "AXTA",
        name: "Axalta Coating Systems Ltd.",
        lastsale: 29.63,
        MarketCap: 6910000000,
        IPOyear: 2014,
        Sector: "Basic Industries",
        Industry: "Paints/Coatings",
        Exchange: "NYSE"
      },
      {
        symbol: "AYX",
        name: "Alteryx, Inc.",
        lastsale: 117.54,
        MarketCap: 7350000000,
        IPOyear: 2017,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "BABA",
        name: "Alibaba Group Holding Limited",
        lastsale: 173.11,
        MarketCap: 450700000000,
        IPOyear: 2014,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NYSE"
      },
      {
        symbol: "BAH",
        name: "Booz Allen Hamilton Holding Corporation",
        lastsale: 68.75,
        MarketCap: 9640000000,
        IPOyear: 2010,
        Sector: "Consumer Services",
        Industry: "Professional Services",
        Exchange: "NYSE"
      },
      {
        symbol: "BERY",
        name: "Berry Global Group, Inc.",
        lastsale: 45.05,
        MarketCap: 5930000000,
        IPOyear: 2012,
        Sector: "Consumer Non-Durables",
        Industry: "Plastic Products",
        Exchange: "NYSE"
      },
      {
        symbol: "BFAM",
        name: "Bright Horizons Family Solutions Inc.",
        lastsale: 152.07,
        MarketCap: 8830000000,
        IPOyear: 2013,
        Sector: "Miscellaneous",
        Industry: "Other Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "BG",
        name: "Bunge Limited",
        lastsale: 58.43,
        MarketCap: 8270000000,
        IPOyear: 2001,
        Sector: "Consumer Non-Durables",
        Industry: "Packaged Foods",
        Exchange: "NYSE"
      },
      {
        symbol: "BHGE",
        name: "Baker Hughes, a GE company",
        lastsale: 25.39,
        MarketCap: 26330000000,
        IPOyear: 2017,
        Sector: "Energy",
        Industry: "Metal Fabrications",
        Exchange: "NYSE"
      },
      {
        symbol: "BKI",
        name: "Black Knight, Inc.",
        lastsale: 63.32,
        MarketCap: 9490000000,
        IPOyear: 2017,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "BLK",
        name: "BlackRock, Inc.",
        lastsale: 467.68,
        MarketCap: 72660000000,
        IPOyear: 1999,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NYSE"
      },
      {
        symbol: "BPL",
        name: "Buckeye Partners L.P.",
        lastsale: 41.73,
        MarketCap: 6700000000,
        IPOyear: 1986,
        Sector: "Energy",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "BRX",
        name: "Brixmor Property Group Inc.",
        lastsale: 18.98,
        MarketCap: 5650000000,
        IPOyear: 2013,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "BSBR",
        name: "Banco Santander Brasil SA",
        lastsale: 11.28,
        MarketCap: 84240000000,
        IPOyear: 2009,
        Sector: "Finance",
        Industry: "Commercial Banks",
        Exchange: "NYSE"
      },
      {
        symbol: "BSMX",
        name: "Banco Santander Mexico, S.A., Institucion de Ban",
        lastsale: 7.1,
        MarketCap: 9640000000,
        IPOyear: 2012,
        Sector: "Finance",
        Industry: "Commercial Banks",
        Exchange: "NYSE"
      },
      {
        symbol: "BURL",
        name: "Burlington Stores, Inc.",
        lastsale: 180.75,
        MarketCap: 12000000000,
        IPOyear: 2013,
        Sector: "Consumer Services",
        Industry: "Department/Specialty Retail Stores",
        Exchange: "NYSE"
      },
      {
        symbol: "BX",
        name: "The Blackstone Group Inc.",
        lastsale: 47.98,
        MarketCap: 57480000000,
        IPOyear: 2007,
        Sector: "Finance",
        Industry: "Investment Managers",
        Exchange: "NYSE"
      },
      {
        symbol: "BXP",
        name: "Boston Properties, Inc.",
        lastsale: 132.95,
        MarketCap: 20550000000,
        IPOyear: 1997,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "CABO",
        name: "Cable One, Inc.",
        lastsale: 1216.8,
        MarketCap: 6940000000,
        IPOyear: 2015,
        Sector: "Consumer Services",
        Industry: "Television Services",
        Exchange: "NYSE"
      },
      {
        symbol: "CBD",
        name: "Companhia Brasileira de Distribuicao",
        lastsale: 24.36,
        MarketCap: 6500000000,
        IPOyear: 1997,
        Sector: "Consumer Services",
        Industry: "Food Chains",
        Exchange: "NYSE"
      },
      {
        symbol: "CCEP",
        name: "Coca-Cola European Partners plc",
        lastsale: 55.28,
        MarketCap: 25800000000,
        IPOyear: 2016,
        Sector: "Consumer Non-Durables",
        Industry: "Beverages (Production/Distribution)",
        Exchange: "NYSE"
      },
      {
        symbol: "CCL",
        name: "Carnival Corporation",
        lastsale: 47.23,
        MarketCap: 33830000000,
        IPOyear: 1987,
        Sector: "Consumer Services",
        Industry: "Marine Transportation",
        Exchange: "NYSE"
      },
      {
        symbol: "CDAY",
        name: "Ceridian HCM Holding Inc.",
        lastsale: 53.31,
        MarketCap: 7410000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "CE",
        name: "Celanese Corporation",
        lastsale: 112.17,
        MarketCap: 13880000000,
        IPOyear: 2005,
        Sector: "Basic Industries",
        Industry: "Major Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "CEA",
        name: "China Eastern Airlines Corporation Ltd.",
        lastsale: 27.47,
        MarketCap: 7950000000,
        IPOyear: 1997,
        Sector: "Transportation",
        Industry: "Air Freight/Delivery Services",
        Exchange: "NYSE"
      },
      {
        symbol: "CF",
        name: "CF Industries Holdings, Inc.",
        lastsale: 49.56,
        MarketCap: 10960000000,
        IPOyear: 2005,
        Sector: "Basic Industries",
        Industry: "Agricultural Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "CFG",
        name: "Citizens Financial Group, Inc.",
        lastsale: 37.26,
        MarketCap: 17060000000,
        IPOyear: 2014,
        Sector: "Finance",
        Industry: "Major Banks",
        Exchange: "NYSE"
      },
      {
        symbol: "CHA",
        name: "China Telecom Corp Ltd",
        lastsale: 44.74,
        MarketCap: 36210000000,
        IPOyear: 2002,
        Sector: "Public Utilities",
        Industry: "Telecommunications Equipment",
        Exchange: "NYSE"
      },
      {
        symbol: "CHGG",
        name: "Chegg, Inc.",
        lastsale: 44.92,
        MarketCap: 5370000000,
        IPOyear: 2013,
        Sector: "Consumer Services",
        Industry: "Other Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "CHWY",
        name: "Chewy, Inc.",
        lastsale: 33.56,
        MarketCap: 13380000000,
        IPOyear: 2019,
        Sector: "Consumer Services",
        Industry: "Catalog/Specialty Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "CIEN",
        name: "Ciena Corporation",
        lastsale: 45.22,
        MarketCap: 7010000000,
        IPOyear: 1997,
        Sector: "Public Utilities",
        Industry: "Telecommunications Equipment",
        Exchange: "NYSE"
      },
      {
        symbol: "CLR",
        name: "Continental Resources, Inc.",
        lastsale: 37.17,
        MarketCap: 14000000000,
        IPOyear: 2007,
        Sector: "Energy",
        Industry: "Oil & Gas Production",
        Exchange: "NYSE"
      },
      {
        symbol: "CMG",
        name: "Chipotle Mexican Grill, Inc.",
        lastsale: 795.53,
        MarketCap: 22050000000,
        IPOyear: 2006,
        Sector: "Consumer Services",
        Industry: "Restaurants",
        Exchange: "NYSE"
      },
      {
        symbol: "CNHI",
        name: "CNH Industrial N.V.",
        lastsale: 10.11,
        MarketCap: 13690000000,
        IPOyear: 2013,
        Sector: "Capital Goods",
        Industry: "Construction/Ag Equipment/Trucks",
        Exchange: "NYSE"
      },
      {
        symbol: "COF",
        name: "Capital One Financial Corporation",
        lastsale: 92.42,
        MarketCap: 43470000000,
        IPOyear: 1994,
        Sector: "Finance",
        Industry: "Major Banks",
        Exchange: "NYSE"
      },
      {
        symbol: "COG",
        name: "Cabot Oil & Gas Corporation",
        lastsale: 19.16,
        MarketCap: 8020000000,
        IPOyear: 1990,
        Sector: "Energy",
        Industry: "Oil & Gas Production",
        Exchange: "NYSE"
      },
      {
        symbol: "COLD",
        name: "Americold Realty Trust",
        lastsale: 33.53,
        MarketCap: 6420000000,
        IPOyear: 2018,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "COTY",
        name: "Coty Inc.",
        lastsale: 10.91,
        MarketCap: 8200000000,
        IPOyear: 2013,
        Sector: "Consumer Non-Durables",
        Industry: "Package Goods/Cosmetics",
        Exchange: "NYSE"
      },
      {
        symbol: "CPL",
        name: "CPFL Energia S.A.",
        lastsale: 16.89,
        MarketCap: 9730000000,
        IPOyear: 2004,
        Sector: "Public Utilities",
        Industry: "Electric Utilities: Central",
        Exchange: "NYSE"
      },
      {
        symbol: "CPRI",
        name: "Capri Holdings Limited",
        lastsale: 35.59,
        MarketCap: 5370000000,
        IPOyear: 2011,
        Sector: "Consumer Non-Durables",
        Industry: "Apparel",
        Exchange: "NYSE"
      },
      {
        symbol: "CPT",
        name: "Camden Property Trust",
        lastsale: 103.71,
        MarketCap: 10040000000,
        IPOyear: 1993,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "CRL",
        name: "Charles River Laboratories International, Inc.",
        lastsale: 134.54,
        MarketCap: 6560000000,
        IPOyear: 2000,
        Sector: "Health Care",
        Industry: "Biotechnology: Commercial Physical & Biological Resarch",
        Exchange: "NYSE"
      },
      {
        symbol: "CRM",
        name: "Salesforce.com Inc",
        lastsale: 154.5,
        MarketCap: 120340000000,
        IPOyear: 2004,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "CTLT",
        name: "Catalent, Inc.",
        lastsale: 56.49,
        MarketCap: 8230000000,
        IPOyear: 2014,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NYSE"
      },
      {
        symbol: "CTVA",
        name: "Corteva, Inc.",
        lastsale: 29.5,
        MarketCap: 22090000000,
        IPOyear: 2019,
        Sector: "Consumer Non-Durables",
        Industry: "Farming/Seeds/Milling",
        Exchange: "NYSE"
      },
      {
        symbol: "CVI",
        name: "CVR Energy Inc.",
        lastsale: 53.07,
        MarketCap: 5340000000,
        IPOyear: 2007,
        Sector: "Energy",
        Industry: "Integrated oil Companies",
        Exchange: "NYSE"
      },
      {
        symbol: "CVNA",
        name: "Carvana Co.",
        lastsale: 63.56,
        MarketCap: 9590000000,
        IPOyear: 2017,
        Sector: "Consumer Durables",
        Industry: "Automotive Aftermarket",
        Exchange: "NYSE"
      },
      {
        symbol: "CXO",
        name: "Concho Resources Inc.",
        lastsale: 97.68,
        MarketCap: 19590000000,
        IPOyear: 2007,
        Sector: "Energy",
        Industry: "Oil & Gas Production",
        Exchange: "NYSE"
      },
      {
        symbol: "DATA",
        name: "Tableau Software, Inc.",
        lastsale: 169.53,
        MarketCap: 14800000000,
        IPOyear: 2013,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "DD",
        name: "DuPont de Nemours, Inc.",
        lastsale: 72.16,
        MarketCap: 54030000000,
        IPOyear: 2017,
        Sector: "Basic Industries",
        Industry: "Major Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "DEI",
        name: "Douglas Emmett, Inc.",
        lastsale: 40.82,
        MarketCap: 7150000000,
        IPOyear: 2006,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "DELL",
        name: "Dell Technologies Inc.",
        lastsale: 57.74,
        MarketCap: 41490000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "Computer Manufacturing",
        Exchange: "NYSE"
      },
      {
        symbol: "DG",
        name: "Dollar General Corporation",
        lastsale: 134.02,
        MarketCap: 34620000000,
        IPOyear: 2009,
        Sector: "Consumer Services",
        Industry: "Department/Specialty Retail Stores",
        Exchange: "NYSE"
      },
      {
        symbol: "DLB",
        name: "Dolby Laboratories",
        lastsale: 68.1,
        MarketCap: 6920000000,
        IPOyear: 2005,
        Sector: "Miscellaneous",
        Industry: "Multi-Sector Companies",
        Exchange: "NYSE"
      },
      {
        symbol: "DLR",
        name: "Digital Realty Trust, Inc.",
        lastsale: 114.36,
        MarketCap: 23820000000,
        IPOyear: 2004,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "DOW",
        name: "Dow Inc.",
        lastsale: 48.44,
        MarketCap: 36000000000,
        IPOyear: 2019,
        Sector: "Basic Industries",
        Industry: "Major Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "DPZ",
        name: "Domino&#39;s Pizza Inc",
        lastsale: 244.53,
        MarketCap: 10080000000,
        IPOyear: 2004,
        Sector: "Consumer Non-Durables",
        Industry: "Food Distributors",
        Exchange: "NYSE"
      },
      {
        symbol: "EBR",
        name: "Centrais Electricas Brasileiras S.A.- Eletrobras",
        lastsale: 10.26,
        MarketCap: 13880000000,
        IPOyear: 2016,
        Sector: "Public Utilities",
        Industry: "Electric Utilities: Central",
        Exchange: "NYSE"
      },
      {
        symbol: "EDU",
        name: "New Oriental Education & Technology Group, Inc.",
        lastsale: 104.31,
        MarketCap: 16510000000,
        IPOyear: 2006,
        Sector: "Consumer Services",
        Industry: "Other Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "EL",
        name: "Estee Lauder Companies, Inc. (The)",
        lastsale: 184.19,
        MarketCap: 66650000000,
        IPOyear: 1995,
        Sector: "Consumer Non-Durables",
        Industry: "Package Goods/Cosmetics",
        Exchange: "NYSE"
      },
      {
        symbol: "ELAN",
        name: "Elanco Animal Health Incorporated",
        lastsale: 32.96,
        MarketCap: 12050000000,
        IPOyear: 2018,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NYSE"
      },
      {
        symbol: "ENBL",
        name: "Enable Midstream Partners, LP",
        lastsale: 13.93,
        MarketCap: 6060000000,
        IPOyear: 2014,
        Sector: "Public Utilities",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "ENIC",
        name: "Enel Chile S.A.",
        lastsale: 4.6,
        MarketCap: 6360000000,
        IPOyear: 2016,
        Sector: "Public Utilities",
        Industry: "Electric Utilities: Central",
        Exchange: "NYSE"
      },
      {
        symbol: "EPAM",
        name: "EPAM Systems, Inc.",
        lastsale: 193.79,
        MarketCap: 10590000000,
        IPOyear: 2012,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NYSE"
      },
      {
        symbol: "EPR",
        name: "EPR Properties",
        lastsale: 74.43,
        MarketCap: 5620000000,
        IPOyear: 1997,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "EQH",
        name: "AXA Equitable Holdings, Inc.",
        lastsale: 22.48,
        MarketCap: 11040000000,
        IPOyear: 2018,
        Sector: "Finance",
        Industry: "Specialty Insurers",
        Exchange: "NYSE"
      },
      {
        symbol: "EQM",
        name: "EQM Midstream Partners, LP",
        lastsale: 38.51,
        MarketCap: 7990000000,
        IPOyear: 2012,
        Sector: "Public Utilities",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "ESS",
        name: "Essex Property Trust, Inc.",
        lastsale: 302.22,
        MarketCap: 19960000000,
        IPOyear: 1994,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "ESTC",
        name: "Elastic N.V.",
        lastsale: 98.83,
        MarketCap: 7450000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "ET",
        name: "Energy Transfer L.P.",
        lastsale: 14.38,
        MarketCap: 37670000000,
        IPOyear: 1996,
        Sector: "Public Utilities",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "EVRG",
        name: "Evergy, Inc.",
        lastsale: 60.49,
        MarketCap: 14770000000,
        IPOyear: 2018,
        Sector: "Public Utilities",
        Industry: "Power Generation",
        Exchange: "NYSE"
      },
      {
        symbol: "EXR",
        name: "Extra Space Storage Inc",
        lastsale: 112.39,
        MarketCap: 14440000000,
        IPOyear: 2004,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "FCAU",
        name: "Fiat Chrysler Automobiles N.V.",
        lastsale: 13.19,
        MarketCap: 26070000000,
        IPOyear: 2014,
        Sector: "Capital Goods",
        Industry: "Auto Manufacturing",
        Exchange: "NYSE"
      },
      {
        symbol: "FDS",
        name: "FactSet Research Systems Inc.",
        lastsale: 277.3,
        MarketCap: 10610000000,
        IPOyear: 1996,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NYSE"
      },
      {
        symbol: "FLT",
        name: "FleetCor Technologies, Inc.",
        lastsale: 284.17,
        MarketCap: 24490000000,
        IPOyear: 2010,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NYSE"
      },
      {
        symbol: "FNF",
        name: "Fidelity National Financial, Inc.",
        lastsale: 42.88,
        MarketCap: 11770000000,
        IPOyear: 2014,
        Sector: "Finance",
        Industry: "Specialty Insurers",
        Exchange: "NYSE"
      },
      {
        symbol: "FTCH",
        name: "Farfetch Limited",
        lastsale: 20.1,
        MarketCap: 6120000000,
        IPOyear: 2018,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NYSE"
      },
      {
        symbol: "FTS",
        name: "Fortis Inc.",
        lastsale: 39.42,
        MarketCap: 17180000000,
        IPOyear: 2016,
        Sector: "Public Utilities",
        Industry: "Electric Utilities: Central",
        Exchange: "NYSE"
      },
      {
        symbol: "FTV",
        name: "Fortive Corporation",
        lastsale: 76.05,
        MarketCap: 25520000000,
        IPOyear: 2016,
        Sector: "Capital Goods",
        Industry: "Industrial Machinery/Components",
        Exchange: "NYSE"
      },
      {
        symbol: "G",
        name: "Genpact Limited",
        lastsale: 39.68,
        MarketCap: 7550000000,
        IPOyear: 2007,
        Sector: "Consumer Services",
        Industry: "Professional Services",
        Exchange: "NYSE"
      },
      {
        symbol: "GDDY",
        name: "GoDaddy Inc.",
        lastsale: 73.38,
        MarketCap: 13000000000,
        IPOyear: 2015,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NYSE"
      },
      {
        symbol: "GDI",
        name: "Gardner Denver Holdings, Inc.",
        lastsale: 32.97,
        MarketCap: 6660000000,
        IPOyear: 2017,
        Sector: "Technology",
        Industry: "Industrial Machinery/Components",
        Exchange: "NYSE"
      },
      {
        symbol: "GIL",
        name: "Gildan Activewear, Inc.",
        lastsale: 39.37,
        MarketCap: 8020000000,
        IPOyear: 1998,
        Sector: "Consumer Non-Durables",
        Industry: "Apparel",
        Exchange: "NYSE"
      },
      {
        symbol: "GM",
        name: "General Motors Company",
        lastsale: 40.34,
        MarketCap: 58560000000,
        IPOyear: 2010,
        Sector: "Capital Goods",
        Industry: "Auto Manufacturing",
        Exchange: "NYSE"
      },
      {
        symbol: "GRUB",
        name: "GrubHub Inc.",
        lastsale: 67.63,
        MarketCap: 6170000000,
        IPOyear: 2014,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NYSE"
      },
      {
        symbol: "GS",
        name: "Goldman Sachs Group, Inc. (The)",
        lastsale: 220.13,
        MarketCap: 80530000000,
        IPOyear: 1999,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NYSE"
      },
      {
        symbol: "GWRE",
        name: "Guidewire Software, Inc.",
        lastsale: 102.08,
        MarketCap: 8350000000,
        IPOyear: 2012,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "H",
        name: "Hyatt Hotels Corporation",
        lastsale: 77.35,
        MarketCap: 8150000000,
        IPOyear: 2009,
        Sector: "Consumer Services",
        Industry: "Hotels/Resorts",
        Exchange: "NYSE"
      },
      {
        symbol: "HAE",
        name: "Haemonetics Corporation",
        lastsale: 122.08,
        MarketCap: 6260000000,
        IPOyear: 1991,
        Sector: "Health Care",
        Industry: "Medical/Dental Instruments",
        Exchange: "NYSE"
      },
      {
        symbol: "HCA",
        name: "HCA Healthcare, Inc.",
        lastsale: 133.51,
        MarketCap: 45700000000,
        IPOyear: 2011,
        Sector: "Health Care",
        Industry: "Hospital/Nursing Management",
        Exchange: "NYSE"
      },
      {
        symbol: "HDB",
        name: "HDFC Bank Limited",
        lastsale: 114.98,
        MarketCap: 104800000000,
        IPOyear: 2001,
        Sector: "Finance",
        Industry: "Commercial Banks",
        Exchange: "NYSE"
      },
      {
        symbol: "HLF",
        name: "Herbalife Nutrition Ltd.",
        lastsale: 41.02,
        MarketCap: 6200000000,
        IPOyear: 2004,
        Sector: "Health Care",
        Industry: "Other Pharmaceuticals",
        Exchange: "NYSE"
      },
      {
        symbol: "HLT",
        name: "Hilton Worldwide Holdings Inc.",
        lastsale: 96.55,
        MarketCap: 27700000000,
        IPOyear: 2016,
        Sector: "Consumer Services",
        Industry: "Hotels/Resorts",
        Exchange: "NYSE"
      },
      {
        symbol: "HNP",
        name: "Huaneng Power International, Inc.",
        lastsale: 23.35,
        MarketCap: 9160000000,
        IPOyear: 1994,
        Sector: "Public Utilities",
        Industry: "Electric Utilities: Central",
        Exchange: "NYSE"
      },
      {
        symbol: "HPE",
        name: "Hewlett Packard Enterprise Company",
        lastsale: 14.37,
        MarketCap: 19240000000,
        IPOyear: 2015,
        Sector: "Technology",
        Industry: "Computer Manufacturing",
        Exchange: "NYSE"
      },
      {
        symbol: "HPP",
        name: "Hudson Pacific Properties, Inc.",
        lastsale: 35.3,
        MarketCap: 5450000000,
        IPOyear: 2010,
        Sector: "Finance",
        Industry: "Real Estate",
        Exchange: "NYSE"
      },
      {
        symbol: "HUBB",
        name: "Hubbell Inc",
        lastsale: 129.88,
        MarketCap: 7080000000,
        IPOyear: 2015,
        Sector: "Capital Goods",
        Industry: "Electrical Products",
        Exchange: "NYSE"
      },
      {
        symbol: "HUBS",
        name: "HubSpot, Inc.",
        lastsale: 178.72,
        MarketCap: 7520000000,
        IPOyear: 2014,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "IAA",
        name: "IAA, Inc.",
        lastsale: 46.75,
        MarketCap: 6240000000,
        IPOyear: 2019,
        Sector: "Consumer Durables",
        Industry: "Automotive Aftermarket",
        Exchange: "NYSE"
      },
      {
        symbol: "ICE",
        name: "Intercontinental Exchange Inc.",
        lastsale: 87.86,
        MarketCap: 49540000000,
        IPOyear: 2005,
        Sector: "Finance",
        Industry: "Investment Bankers/Brokers/Service",
        Exchange: "NYSE"
      },
      {
        symbol: "ICL",
        name: "Israel Chemicals Shs",
        lastsale: 5.44,
        MarketCap: 6960000000,
        IPOyear: 2014,
        Sector: "Basic Industries",
        Industry: "Agricultural Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "IEX",
        name: "IDEX Corporation",
        lastsale: 168.22,
        MarketCap: 12760000000,
        IPOyear: 1989,
        Sector: "Capital Goods",
        Industry: "Fluid Controls",
        Exchange: "NYSE"
      },
      {
        symbol: "INFO",
        name: "IHS Markit Ltd.",
        lastsale: 64.42,
        MarketCap: 25840000000,
        IPOyear: 1996,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NYSE"
      },
      {
        symbol: "ING",
        name: "ING Group, N.V.",
        lastsale: 11.1,
        MarketCap: 43240000000,
        IPOyear: 1997,
        Sector: "Finance",
        Industry: "Commercial Banks",
        Exchange: "NYSE"
      },
      {
        symbol: "INVH",
        name: "Invitation Homes Inc.",
        lastsale: 27.47,
        MarketCap: 14420000000,
        IPOyear: 2017,
        Sector: "Finance",
        Industry: "Real Estate",
        Exchange: "NYSE"
      },
      {
        symbol: "INXN",
        name: "InterXion Holding N.V.",
        lastsale: 75.3,
        MarketCap: 5760000000,
        IPOyear: 2011,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NYSE"
      },
      {
        symbol: "IQV",
        name: "IQVIA Holdings, Inc.",
        lastsale: 159.17,
        MarketCap: 31180000000,
        IPOyear: 2013,
        Sector: "Health Care",
        Industry: "Biotechnology: Commercial Physical & Biological Resarch",
        Exchange: "NYSE"
      },
      {
        symbol: "IT",
        name: "Gartner, Inc.",
        lastsale: 139.33,
        MarketCap: 12560000000,
        IPOyear: 1993,
        Sector: "Consumer Services",
        Industry: "Other Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "ITT",
        name: "ITT Inc.",
        lastsale: 62.42,
        MarketCap: 5480000000,
        IPOyear: 2011,
        Sector: "Capital Goods",
        Industry: "Fluid Controls",
        Exchange: "NYSE"
      },
      {
        symbol: "JBGS",
        name: "JBG SMITH Properties",
        lastsale: 39.13,
        MarketCap: 5250000000,
        IPOyear: 2017,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "JNPR",
        name: "Juniper Networks, Inc.",
        lastsale: 27.02,
        MarketCap: 9300000000,
        IPOyear: 1999,
        Sector: "Technology",
        Industry: "Computer Communications Equipment",
        Exchange: "NYSE"
      },
      {
        symbol: "KEP",
        name: "Korea Electric Power Corporation",
        lastsale: 11.73,
        MarketCap: 15060000000,
        IPOyear: 1994,
        Sector: "Public Utilities",
        Industry: "Electric Utilities: Central",
        Exchange: "NYSE"
      },
      {
        symbol: "KEYS",
        name: "Keysight Technologies Inc.",
        lastsale: 89.52,
        MarketCap: 16850000000,
        IPOyear: 2014,
        Sector: "Capital Goods",
        Industry: "Industrial Machinery/Components",
        Exchange: "NYSE"
      },
      {
        symbol: "KMI",
        name: "Kinder Morgan, Inc.",
        lastsale: 20.62,
        MarketCap: 46680000000,
        IPOyear: 2011,
        Sector: "Public Utilities",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "KNX",
        name: "Knight Transportation, Inc.",
        lastsale: 35.84,
        MarketCap: 6200000000,
        IPOyear: 2017,
        Sector: "Transportation",
        Industry: "Trucking Freight/Courier Services",
        Exchange: "NYSE"
      },
      {
        symbol: "KOF",
        name: "Coca Cola Femsa S.A.B. de C.V.",
        lastsale: 61.34,
        MarketCap: 12890000000,
        IPOyear: 1993,
        Sector: "Consumer Non-Durables",
        Industry: "Beverages (Production/Distribution)",
        Exchange: "NYSE"
      },
      {
        symbol: "KRC",
        name: "Kilroy Realty Corporation",
        lastsale: 79.46,
        MarketCap: 8020000000,
        IPOyear: 1997,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "KSS",
        name: "Kohl&#39;s Corporation",
        lastsale: 53.86,
        MarketCap: 8730000000,
        IPOyear: 1992,
        Sector: "Consumer Services",
        Industry: "Department/Specialty Retail Stores",
        Exchange: "NYSE"
      },
      {
        symbol: "LEVI",
        name: "Levi Strauss & Co",
        lastsale: 19.06,
        MarketCap: 7480000000,
        IPOyear: 2019,
        Sector: "Consumer Non-Durables",
        Industry: "Apparel",
        Exchange: "NYSE"
      },
      {
        symbol: "LFC",
        name: "China Life Insurance Company Limited",
        lastsale: 12.74,
        MarketCap: 72020000000,
        IPOyear: 2003,
        Sector: "Finance",
        Industry: "Life Insurance",
        Exchange: "NYSE"
      },
      {
        symbol: "LII",
        name: "Lennox International, Inc.",
        lastsale: 256.48,
        MarketCap: 9930000000,
        IPOyear: 1999,
        Sector: "Capital Goods",
        Industry: "Industrial Machinery/Components",
        Exchange: "NYSE"
      },
      {
        symbol: "LIN",
        name: "Linde plc",
        lastsale: 191.28,
        MarketCap: 103820000000,
        IPOyear: 2018,
        Sector: "Basic Industries",
        Industry: "Major Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "LN",
        name: "LINE Corporation",
        lastsale: 31.81,
        MarketCap: 7610000000,
        IPOyear: 2016,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NYSE"
      },
      {
        symbol: "LVS",
        name: "Las Vegas Sands Corp.",
        lastsale: 60.44,
        MarketCap: 46530000000,
        IPOyear: 2004,
        Sector: "Consumer Services",
        Industry: "Hotels/Resorts",
        Exchange: "NYSE"
      },
      {
        symbol: "LW",
        name: "Lamb Weston Holdings, Inc.",
        lastsale: 67.12,
        MarketCap: 9800000000,
        IPOyear: 2016,
        Sector: "Consumer Non-Durables",
        Industry: "Packaged Foods",
        Exchange: "NYSE"
      },
      {
        symbol: "MA",
        name: "Mastercard Incorporated",
        lastsale: 272.27,
        MarketCap: 276230000000,
        IPOyear: 2006,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NYSE"
      },
      {
        symbol: "MAA",
        name: "Mid-America Apartment Communities, Inc.",
        lastsale: 117.84,
        MarketCap: 13430000000,
        IPOyear: 1994,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "MET",
        name: "MetLife, Inc.",
        lastsale: 49.42,
        MarketCap: 46970000000,
        IPOyear: 2000,
        Sector: "Finance",
        Industry: "Life Insurance",
        Exchange: "NYSE"
      },
      {
        symbol: "MFGP",
        name: "Micro Focus Intl PLC",
        lastsale: 20.86,
        MarketCap: 7160000000,
        IPOyear: 2017,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "MGP",
        name: "MGM Growth Properties LLC",
        lastsale: 29.86,
        MarketCap: 8950000000,
        IPOyear: 2016,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "MKL",
        name: "Markel Corporation",
        lastsale: 1113.93,
        MarketCap: 15400000000,
        IPOyear: 1986,
        Sector: "Finance",
        Industry: "Property-Casualty Insurers",
        Exchange: "NYSE"
      },
      {
        symbol: "MLM",
        name: "Martin Marietta Materials, Inc.",
        lastsale: 247.75,
        MarketCap: 15460000000,
        IPOyear: 1994,
        Sector: "Basic Industries",
        Industry: "Mining & Quarrying of Nonmetallic Minerals (No Fuels)",
        Exchange: "NYSE"
      },
      {
        symbol: "MOH",
        name: "Molina Healthcare Inc",
        lastsale: 132.78,
        MarketCap: 8310000000,
        IPOyear: 2003,
        Sector: "Health Care",
        Industry: "Medical Specialities",
        Exchange: "NYSE"
      },
      {
        symbol: "MPLX",
        name: "MPLX LP",
        lastsale: 29.35,
        MarketCap: 31030000000,
        IPOyear: 2012,
        Sector: "Energy",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "MPW",
        name: "Medical Properties Trust, Inc.",
        lastsale: 17.5,
        MarketCap: 7810000000,
        IPOyear: 2005,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "MSG",
        name: "The Madison Square Garden Company",
        lastsale: 290.04,
        MarketCap: 6890000000,
        IPOyear: 2015,
        Sector: "Consumer Services",
        Industry: "Services-Misc. Amusement & Recreation",
        Exchange: "NYSE"
      },
      {
        symbol: "MTD",
        name: "Mettler-Toledo International, Inc.",
        lastsale: 756.75,
        MarketCap: 18770000000,
        IPOyear: 1997,
        Sector: "Capital Goods",
        Industry: "Biotechnology: Laboratory Analytical Instruments",
        Exchange: "NYSE"
      },
      {
        symbol: "MTN",
        name: "Vail Resorts, Inc.",
        lastsale: 246.52,
        MarketCap: 9910000000,
        IPOyear: 1997,
        Sector: "Consumer Services",
        Industry: "Services-Misc. Amusement & Recreation",
        Exchange: "NYSE"
      },
      {
        symbol: "NEWR",
        name: "New Relic, Inc.",
        lastsale: 93.17,
        MarketCap: 5440000000,
        IPOyear: 2014,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "NLSN",
        name: "Nielsen N.V.",
        lastsale: 23.16,
        MarketCap: 8230000000,
        IPOyear: 2011,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NYSE"
      },
      {
        symbol: "NOK",
        name: "Nokia Corporation",
        lastsale: 5.41,
        MarketCap: 30290000000,
        IPOyear: 1994,
        Sector: "Technology",
        Industry: "Radio And Television Broadcasting And Communications Equipment",
        Exchange: "NYSE"
      },
      {
        symbol: "NOW",
        name: "ServiceNow, Inc.",
        lastsale: 277.39,
        MarketCap: 51460000000,
        IPOyear: 2012,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "NTR",
        name: "Nutrien Ltd.",
        lastsale: 54.81,
        MarketCap: 31790000000,
        IPOyear: 2018,
        Sector: "Basic Industries",
        Industry: "Agricultural Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "OAK",
        name: "Oaktree Capital Group, LLC",
        lastsale: 50.66,
        MarketCap: 8230000000,
        IPOyear: 2012,
        Sector: "Finance",
        Industry: "Investment Managers",
        Exchange: "NYSE"
      },
      {
        symbol: "OHI",
        name: "Omega Healthcare Investors, Inc.",
        lastsale: 36.3,
        MarketCap: 7790000000,
        IPOyear: 1992,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "OMF",
        name: "OneMain Holdings, Inc.",
        lastsale: 41.45,
        MarketCap: 5640000000,
        IPOyear: 2013,
        Sector: "Finance",
        Industry: "Finance: Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "ORCL",
        name: "Oracle Corporation",
        lastsale: 56.3,
        MarketCap: 187810000000,
        IPOyear: 1986,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "PAA",
        name: "Plains All American Pipeline, L.P.",
        lastsale: 23.78,
        MarketCap: 17280000000,
        IPOyear: 1998,
        Sector: "Energy",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "PAC",
        name: "Grupo Aeroportuario Del Pacifico, S.A. de C.V.",
        lastsale: 100.09,
        MarketCap: 5620000000,
        IPOyear: 2006,
        Sector: "Transportation",
        Industry: "Aerospace",
        Exchange: "NYSE"
      },
      {
        symbol: "PAGS",
        name: "PagSeguro Digital Ltd.",
        lastsale: 43.48,
        MarketCap: 14260000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NYSE"
      },
      {
        symbol: "PANW",
        name: "Palo Alto Networks, Inc.",
        lastsale: 226.54,
        MarketCap: 21740000000,
        IPOyear: 2012,
        Sector: "Technology",
        Industry: "Computer peripheral equipment",
        Exchange: "NYSE"
      },
      {
        symbol: "PAYC",
        name: "Paycom Software, Inc.",
        lastsale: 240.75,
        MarketCap: 13740000000,
        IPOyear: 2014,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "PE",
        name: "Parsley Energy, Inc.",
        lastsale: 16.59,
        MarketCap: 5250000000,
        IPOyear: 2014,
        Sector: "Energy",
        Industry: "Oil & Gas Production",
        Exchange: "NYSE"
      },
      {
        symbol: "PEN",
        name: "Penumbra, Inc.",
        lastsale: 167.6,
        MarketCap: 5820000000,
        IPOyear: 2015,
        Sector: "Health Care",
        Industry: "Medical/Dental Instruments",
        Exchange: "NYSE"
      },
      {
        symbol: "PINS",
        name: "Pinterest, Inc.",
        lastsale: 28.99,
        MarketCap: 15730000000,
        IPOyear: 2019,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NYSE"
      },
      {
        symbol: "PK",
        name: "Park Hotels & Resorts Inc.",
        lastsale: 26.41,
        MarketCap: 5320000000,
        IPOyear: 2016,
        Sector: "Consumer Services",
        Industry: "Hotels/Resorts",
        Exchange: "NYSE"
      },
      {
        symbol: "PKG",
        name: "Packaging Corporation of America",
        lastsale: 100.97,
        MarketCap: 9540000000,
        IPOyear: 2000,
        Sector: "Consumer Durables",
        Industry: "Containers/Packaging",
        Exchange: "NYSE"
      },
      {
        symbol: "PKX",
        name: "POSCO",
        lastsale: 46.83,
        MarketCap: 16330000000,
        IPOyear: 1994,
        Sector: "Basic Industries",
        Industry: "Steel/Iron Ore",
        Exchange: "NYSE"
      },
      {
        symbol: "PLAN",
        name: "Anaplan, Inc.",
        lastsale: 56.94,
        MarketCap: 7350000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "PLNT",
        name: "Planet Fitness, Inc.",
        lastsale: 78.66,
        MarketCap: 7320000000,
        IPOyear: 2015,
        Sector: "Consumer Services",
        Industry: "Hotels/Resorts",
        Exchange: "NYSE"
      },
      {
        symbol: "POST",
        name: "Post Holdings, Inc.",
        lastsale: 107.22,
        MarketCap: 7860000000,
        IPOyear: 2012,
        Sector: "Consumer Non-Durables",
        Industry: "Packaged Foods",
        Exchange: "NYSE"
      },
      {
        symbol: "PRI",
        name: "Primerica, Inc.",
        lastsale: 122.69,
        MarketCap: 5190000000,
        IPOyear: 2010,
        Sector: "Finance",
        Industry: "Life Insurance",
        Exchange: "NYSE"
      },
      {
        symbol: "PRU",
        name: "Prudential Financial, Inc.",
        lastsale: 101.31,
        MarketCap: 41270000000,
        IPOyear: 2001,
        Sector: "Finance",
        Industry: "Life Insurance",
        Exchange: "NYSE"
      },
      {
        symbol: "PSXP",
        name: "Phillips 66 Partners LP",
        lastsale: 52.26,
        MarketCap: 6530000000,
        IPOyear: 2013,
        Sector: "Energy",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "QSR",
        name: "Restaurant Brands International Inc.",
        lastsale: 73.7,
        MarketCap: 18880000000,
        IPOyear: 2014,
        Sector: "Consumer Services",
        Industry: "Restaurants",
        Exchange: "NYSE"
      },
      {
        symbol: "RACE",
        name: "Ferrari N.V.",
        lastsale: 161.08,
        MarketCap: 39330000000,
        IPOyear: 2015,
        Sector: "Capital Goods",
        Industry: "Auto Manufacturing",
        Exchange: "NYSE"
      },
      {
        symbol: "RCL",
        name: "Royal Caribbean Cruises Ltd.",
        lastsale: 116.34,
        MarketCap: 24380000000,
        IPOyear: 1993,
        Sector: "Consumer Services",
        Industry: "Marine Transportation",
        Exchange: "NYSE"
      },
      {
        symbol: "RELX",
        name: "RELX PLC",
        lastsale: 23.73,
        MarketCap: 46170000000,
        IPOyear: 2015,
        Sector: "Consumer Services",
        Industry: "Publishing",
        Exchange: "NYSE"
      },
      {
        symbol: "RIO",
        name: "Rio Tinto Plc",
        lastsale: 57.08,
        MarketCap: 96560000000,
        IPOyear: 2002,
        Sector: "Basic Industries",
        Industry: "Precious Metals",
        Exchange: "NYSE"
      },
      {
        symbol: "RL",
        name: "Ralph Lauren Corporation",
        lastsale: 104.23,
        MarketCap: 8050000000,
        IPOyear: 1997,
        Sector: "Consumer Non-Durables",
        Industry: "Apparel",
        Exchange: "NYSE"
      },
      {
        symbol: "RNG",
        name: "Ringcentral, Inc.",
        lastsale: 141.98,
        MarketCap: 11630000000,
        IPOyear: 2013,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NYSE"
      },
      {
        symbol: "ROP",
        name: "Roper Technologies, Inc.",
        lastsale: 363.65,
        MarketCap: 37760000000,
        IPOyear: 1992,
        Sector: "Capital Goods",
        Industry: "Industrial Machinery/Components",
        Exchange: "NYSE"
      },
      {
        symbol: "RS",
        name: "Reliance Steel & Aluminum Co.",
        lastsale: 99.95,
        MarketCap: 6660000000,
        IPOyear: 1994,
        Sector: "Basic Industries",
        Industry: "Metal Fabrications",
        Exchange: "NYSE"
      },
      {
        symbol: "RSG",
        name: "Republic Services, Inc.",
        lastsale: 88.65,
        MarketCap: 28430000000,
        IPOyear: 1998,
        Sector: "Public Utilities",
        Industry: "Environmental Services",
        Exchange: "NYSE"
      },
      {
        symbol: "S",
        name: "Sprint Corporation",
        lastsale: 7.33,
        MarketCap: 30000000000,
        IPOyear: 2013,
        Sector: "Public Utilities",
        Industry: "Telecommunications Equipment",
        Exchange: "NYSE"
      },
      {
        symbol: "SBS",
        name: "Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp",
        lastsale: 13.91,
        MarketCap: 9510000000,
        IPOyear: 2002,
        Sector: "Public Utilities",
        Industry: "Water Supply",
        Exchange: "NYSE"
      },
      {
        symbol: "SC",
        name: "Santander Consumer USA Holdings Inc.",
        lastsale: 26.91,
        MarketCap: 9470000000,
        IPOyear: 2014,
        Sector: "Finance",
        Industry: "Finance: Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "SE",
        name: "Sea Limited",
        lastsale: 35.1,
        MarketCap: 14520000000,
        IPOyear: 2017,
        Sector: "Consumer Services",
        Industry: "Other Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "SERV",
        name: "ServiceMaster Global Holdings, Inc.",
        lastsale: 53.23,
        MarketCap: 7240000000,
        IPOyear: 2014,
        Sector: "Consumer Services",
        Industry: "Other Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "SHLX",
        name: "Shell Midstream Partners, L.P.",
        lastsale: 21.59,
        MarketCap: 5040000000,
        IPOyear: 2014,
        Sector: "Energy",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "SHOP",
        name: "Shopify Inc.",
        lastsale: 317.88,
        MarketCap: 31880000000,
        IPOyear: 2015,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "SKX",
        name: "Skechers U.S.A., Inc.",
        lastsale: 37.94,
        MarketCap: 5970000000,
        IPOyear: 1999,
        Sector: "Consumer Non-Durables",
        Industry: "Shoe Manufacturing",
        Exchange: "NYSE"
      },
      {
        symbol: "SLG",
        name: "SL Green Realty Corp",
        lastsale: 81.08,
        MarketCap: 6680000000,
        IPOyear: 1997,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "SMAR",
        name: "Smartsheet Inc.",
        lastsale: 49.91,
        MarketCap: 5320000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "SMG",
        name: "Scotts Miracle-Gro Company (The)",
        lastsale: 112.18,
        MarketCap: 6220000000,
        IPOyear: 1992,
        Sector: "Basic Industries",
        Industry: "Agricultural Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "SNAP",
        name: "Snap Inc.",
        lastsale: 16.8,
        MarketCap: 23170000000,
        IPOyear: 2017,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NYSE"
      },
      {
        symbol: "SNX",
        name: "Synnex Corporation",
        lastsale: 98.54,
        MarketCap: 5030000000,
        IPOyear: 2003,
        Sector: "Technology",
        Industry: "Retail: Computer Software & Peripheral Equipment",
        Exchange: "NYSE"
      },
      {
        symbol: "SPOT",
        name: "Spotify Technology S.A.",
        lastsale: 154.94,
        MarketCap: 28020000000,
        IPOyear: 2018,
        Sector: "Consumer Services",
        Industry: "Broadcasting",
        Exchange: "NYSE"
      },
      {
        symbol: "SPR",
        name: "Spirit Aerosystems Holdings, Inc.",
        lastsale: 76.84,
        MarketCap: 7950000000,
        IPOyear: 2006,
        Sector: "Capital Goods",
        Industry: "Military/Government/Technical",
        Exchange: "NYSE"
      },
      {
        symbol: "SQ",
        name: "Square, Inc.",
        lastsale: 80.41,
        MarketCap: 34010000000,
        IPOyear: 2015,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "SQM",
        name: "Sociedad Quimica y Minera S.A.",
        lastsale: 29.49,
        MarketCap: 7760000000,
        IPOyear: 1993,
        Sector: "Basic Industries",
        Industry: "Mining & Quarrying of Nonmetallic Minerals (No Fuels)",
        Exchange: "NYSE"
      },
      {
        symbol: "ST",
        name: "Sensata Technologies Holding plc",
        lastsale: 47.43,
        MarketCap: 7640000000,
        IPOyear: 2010,
        Sector: "Capital Goods",
        Industry: "Industrial Machinery/Components",
        Exchange: "NYSE"
      },
      {
        symbol: "STOR",
        name: "STORE Capital Corporation",
        lastsale: 34.21,
        MarketCap: 7770000000,
        IPOyear: 2014,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "STWD",
        name: "STARWOOD PROPERTY TRUST, INC.",
        lastsale: 23.23,
        MarketCap: 6510000000,
        IPOyear: 2009,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "SUI",
        name: "Sun Communities, Inc.",
        lastsale: 132.81,
        MarketCap: 12040000000,
        IPOyear: 1993,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "SUZ",
        name: "Suzano S.A.",
        lastsale: 15.94,
        MarketCap: 10750000000,
        IPOyear: 2018,
        Sector: "Basic Industries",
        Industry: "Paper",
        Exchange: "NYSE"
      },
      {
        symbol: "SWI",
        name: "SolarWinds Corporation",
        lastsale: 17.92,
        MarketCap: 5560000000,
        IPOyear: 2018,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "SYF",
        name: "Synchrony Financial",
        lastsale: 35.88,
        MarketCap: 23800000000,
        IPOyear: 2014,
        Sector: "Finance",
        Industry: "Finance: Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "TAK",
        name: "Takeda Pharmaceutical Company Limited",
        lastsale: 17.6,
        MarketCap: 54730000000,
        IPOyear: 2018,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NYSE"
      },
      {
        symbol: "TDG",
        name: "Transdigm Group Incorporated",
        lastsale: 485.44,
        MarketCap: 25820000000,
        IPOyear: 2006,
        Sector: "Capital Goods",
        Industry: "Military/Government/Technical",
        Exchange: "NYSE"
      },
      {
        symbol: "TEF",
        name: "Telefonica SA",
        lastsale: 7.61,
        MarketCap: 39510000000,
        IPOyear: 1988,
        Sector: "Public Utilities",
        Industry: "Telecommunications Equipment",
        Exchange: "NYSE"
      },
      {
        symbol: "TGE",
        name: "Tallgrass Energy, LP",
        lastsale: 19.17,
        MarketCap: 5390000000,
        IPOyear: 2015,
        Sector: "Public Utilities",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "TIF",
        name: "Tiffany & Co.",
        lastsale: 93.92,
        MarketCap: 11400000000,
        IPOyear: 1987,
        Sector: "Consumer Services",
        Industry: "Consumer Specialties",
        Exchange: "NYSE"
      },
      {
        symbol: "TME",
        name: "Tencent Music Entertainment Group",
        lastsale: 14.27,
        MarketCap: 23300000000,
        IPOyear: 2018,
        Sector: "Consumer Services",
        Industry: "Broadcasting",
        Exchange: "NYSE"
      },
      {
        symbol: "TNET",
        name: "TriNet Group, Inc.",
        lastsale: 73.54,
        MarketCap: 5140000000,
        IPOyear: 2014,
        Sector: "Miscellaneous",
        Industry: "Business Services",
        Exchange: "NYSE"
      },
      {
        symbol: "TRGP",
        name: "Targa Resources, Inc.",
        lastsale: 38.91,
        MarketCap: 9060000000,
        IPOyear: 2010,
        Sector: "Public Utilities",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "TRU",
        name: "TransUnion",
        lastsale: 82.79,
        MarketCap: 15550000000,
        IPOyear: 2015,
        Sector: "Finance",
        Industry: "Finance: Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "TSM",
        name: "Taiwan Semiconductor Manufacturing Company Ltd.",
        lastsale: 42.63,
        MarketCap: 221080000000,
        IPOyear: 1997,
        Sector: "Technology",
        Industry: "Semiconductors",
        Exchange: "NYSE"
      },
      {
        symbol: "TV",
        name: "Grupo Televisa S.A.",
        lastsale: 9.51,
        MarketCap: 5500000000,
        IPOyear: 1993,
        Sector: "Consumer Services",
        Industry: "Broadcasting",
        Exchange: "NYSE"
      },
      {
        symbol: "TWLO",
        name: "Twilio Inc.",
        lastsale: 139.11,
        MarketCap: 17560000000,
        IPOyear: 2016,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "TWTR",
        name: "Twitter, Inc.",
        lastsale: 42.31,
        MarketCap: 32520000000,
        IPOyear: 2013,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NYSE"
      },
      {
        symbol: "UA",
        name: "Under Armour, Inc.",
        lastsale: 20.34,
        MarketCap: 9170000000,
        IPOyear: 2016,
        Sector: "Consumer Non-Durables",
        Industry: "Apparel",
        Exchange: "NYSE"
      },
      {
        symbol: "UBER",
        name: "Uber Technologies, Inc.",
        lastsale: 42.14,
        MarketCap: 71450000000,
        IPOyear: 2019,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "UBS",
        name: "UBS AG",
        lastsale: 11.17,
        MarketCap: 40880000000,
        IPOyear: 2014,
        Sector: "Finance",
        Industry: "Major Banks",
        Exchange: "NYSE"
      },
      {
        symbol: "UPS",
        name: "United Parcel Service, Inc.",
        lastsale: 119.47,
        MarketCap: 102830000000,
        IPOyear: 1999,
        Sector: "Transportation",
        Industry: "Trucking Freight/Courier Services",
        Exchange: "NYSE"
      },
      {
        symbol: "URI",
        name: "United Rentals, Inc.",
        lastsale: 126.55,
        MarketCap: 9760000000,
        IPOyear: 1997,
        Sector: "Technology",
        Industry: "Diversified Commercial Services",
        Exchange: "NYSE"
      },
      {
        symbol: "USFD",
        name: "US Foods Holding Corp.",
        lastsale: 35.37,
        MarketCap: 7730000000,
        IPOyear: 2016,
        Sector: "Consumer Non-Durables",
        Industry: "Food Distributors",
        Exchange: "NYSE"
      },
      {
        symbol: "VEDL",
        name: "Vedanta  Limited",
        lastsale: 8.73,
        MarketCap: 8110000000,
        IPOyear: 2013,
        Sector: "Capital Goods",
        Industry: "Metal Fabrications",
        Exchange: "NYSE"
      },
      {
        symbol: "VEEV",
        name: "Veeva Systems Inc.",
        lastsale: 165.9,
        MarketCap: 24430000000,
        IPOyear: 2013,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "VICI",
        name: "VICI Properties Inc.",
        lastsale: 21.34,
        MarketCap: 9840000000,
        IPOyear: 2018,
        Sector: "Consumer Services",
        Industry: "Real Estate Investment Trusts",
        Exchange: "NYSE"
      },
      {
        symbol: "VIPS",
        name: "Vipshop Holdings Limited",
        lastsale: 7.6,
        MarketCap: 5060000000,
        IPOyear: 2012,
        Sector: "Consumer Services",
        Industry: "Catalog/Specialty Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "VMW",
        name: "Vmware, Inc.",
        lastsale: 174.49,
        MarketCap: 71400000000,
        IPOyear: 2007,
        Sector: "Technology",
        Industry: "Computer Software: Prepackaged Software",
        Exchange: "NYSE"
      },
      {
        symbol: "VOYA",
        name: "Voya Financial, Inc.",
        lastsale: 56.17,
        MarketCap: 8050000000,
        IPOyear: 2013,
        Sector: "Finance",
        Industry: "Life Insurance",
        Exchange: "NYSE"
      },
      {
        symbol: "VSM",
        name: "Versum Materials, Inc.",
        lastsale: 51.98,
        MarketCap: 5680000000,
        IPOyear: 2016,
        Sector: "Basic Industries",
        Industry: "Major Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "W",
        name: "Wayfair Inc.",
        lastsale: 131.16,
        MarketCap: 12020000000,
        IPOyear: 2014,
        Sector: "Consumer Services",
        Industry: "Catalog/Specialty Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "WAL",
        name: "Western Alliance Bancorporation",
        lastsale: 49.44,
        MarketCap: 5120000000,
        IPOyear: 2005,
        Sector: "Finance",
        Industry: "Major Banks",
        Exchange: "NYSE"
      },
      {
        symbol: "WAT",
        name: "Waters Corporation",
        lastsale: 210.56,
        MarketCap: 14630000000,
        IPOyear: 1995,
        Sector: "Capital Goods",
        Industry: "Biotechnology: Laboratory Analytical Instruments",
        Exchange: "NYSE"
      },
      {
        symbol: "WCG",
        name: "WellCare Health Plans, Inc.",
        lastsale: 287.25,
        MarketCap: 14450000000,
        IPOyear: 2004,
        Sector: "Health Care",
        Industry: "Medical Specialities",
        Exchange: "NYSE"
      },
      {
        symbol: "WES",
        name: "Western Midstream Partners, LP",
        lastsale: 27,
        MarketCap: 12230000000,
        IPOyear: 2012,
        Sector: "Public Utilities",
        Industry: "Natural Gas Distribution",
        Exchange: "NYSE"
      },
      {
        symbol: "WH",
        name: "Wyndham Hotels & Resorts, Inc.",
        lastsale: 56.55,
        MarketCap: 5450000000,
        IPOyear: 2018,
        Sector: "Consumer Services",
        Industry: "Hotels/Resorts",
        Exchange: "NYSE"
      },
      {
        symbol: "WLK",
        name: "Westlake Chemical Corporation",
        lastsale: 67.57,
        MarketCap: 8690000000,
        IPOyear: 2004,
        Sector: "Basic Industries",
        Industry: "Major Chemicals",
        Exchange: "NYSE"
      },
      {
        symbol: "WORK",
        name: "Slack Technologies, Inc.",
        lastsale: 33.42,
        MarketCap: 16860000000,
        IPOyear: 2019,
        Sector: "Consumer Services",
        Industry: "Other Consumer Services",
        Exchange: "NYSE"
      },
      {
        symbol: "WRK",
        name: "Westrock Company",
        lastsale: 36.05,
        MarketCap: 9270000000,
        IPOyear: 2015,
        Sector: "Consumer Durables",
        Industry: "Containers/Packaging",
        Exchange: "NYSE"
      },
      {
        symbol: "WUBA",
        name: "58.com Inc.",
        lastsale: 56.38,
        MarketCap: 8380000000,
        IPOyear: 2013,
        Sector: "Technology",
        Industry: "Computer Software: Programming, Data Processing",
        Exchange: "NYSE"
      },
      {
        symbol: "XYL",
        name: "Xylem Inc.",
        lastsale: 80.29,
        MarketCap: 14450000000,
        IPOyear: 2011,
        Sector: "Capital Goods",
        Industry: "Fluid Controls",
        Exchange: "NYSE"
      },
      {
        symbol: "YPF",
        name: "YPF Sociedad Anonima",
        lastsale: 16.45,
        MarketCap: 6470000000,
        IPOyear: 1993,
        Sector: "Energy",
        Industry: "Integrated oil Companies",
        Exchange: "NYSE"
      },
      {
        symbol: "YUMC",
        name: "Yum China Holdings, Inc.",
        lastsale: 45.5,
        MarketCap: 17210000000,
        IPOyear: 2016,
        Sector: "Consumer Services",
        Industry: "Restaurants",
        Exchange: "NYSE"
      },
      {
        symbol: "ZAYO",
        name: "Zayo Group Holdings, Inc.",
        lastsale: 33.73,
        MarketCap: 7950000000,
        IPOyear: 2014,
        Sector: "Public Utilities",
        Industry: "Telecommunications Equipment",
        Exchange: "NYSE"
      },
      {
        symbol: "ZEN",
        name: "Zendesk, Inc.",
        lastsale: 83.56,
        MarketCap: 9160000000,
        IPOyear: 2014,
        Sector: "Technology",
        Industry: "EDP Services",
        Exchange: "NYSE"
      },
      {
        symbol: "ZNH",
        name: "China Southern Airlines Company Limited",
        lastsale: 32.38,
        MarketCap: 7940000000,
        IPOyear: 1997,
        Sector: "Transportation",
        Industry: "Air Freight/Delivery Services",
        Exchange: "NYSE"
      },
      {
        symbol: "ZTO",
        name: "ZTO Express (Cayman) Inc.",
        lastsale: 19.65,
        MarketCap: 15480000000,
        IPOyear: 2016,
        Sector: "Transportation",
        Industry: "Trucking Freight/Courier Services",
        Exchange: "NYSE"
      },
      {
        symbol: "ZTS",
        name: "Zoetis Inc.",
        lastsale: 114.89,
        MarketCap: 54990000000,
        IPOyear: 2013,
        Sector: "Health Care",
        Industry: "Major Pharmaceuticals",
        Exchange: "NYSE"
      }
    ];

  constructor(marketService: GetmarketserviceService) {
    this.marketService = marketService;
  }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(symbol: SearchSYM): string {
    return symbol && symbol.symbol ? symbol.symbol : '';
  }

  private _filter(name: string): SearchSYM[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}

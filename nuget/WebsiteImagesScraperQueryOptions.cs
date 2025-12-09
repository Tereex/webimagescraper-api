using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WebsiteImagesScraper
{
    /// <summary>
    /// Query options for the Website Images Scraper API
    /// </summary>
    public class WebsiteImagesScraperQueryOptions
    {
        /// <summary>
        /// The URL of the website you want to scrape images from
        /// Example: https://example.com
        /// </summary>
        [JsonProperty("url")]
        public string Url { get; set; }
    }
}

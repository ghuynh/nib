using System;
using Xunit;
using System.Net;
using System.Net.Http;
using System.Xml;

namespace NibTest
{
    public class HomepageTest
    {
        [Fact]
        public void DetectHelloWorldWords()
        {
            using (HttpClient client = new HttpClient())
            {
                using (HttpResponseMessage response = client.GetAsync("http://localhost:5000").Result)
                {
                    using (HttpContent content = response.Content)
                    {
                        string result = content.ReadAsStringAsync().Result;
                        Assert.Contains("Hello World", result);
                    }
                }
            }
            
          
        }
    }
}

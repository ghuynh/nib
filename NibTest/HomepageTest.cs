using System;
using Xunit;
using System.Net;
using System.Net.Http;
using System.Xml;
using Nib.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace NibTest
{
    public class HomepageTest
    {
        [Fact]
        public void DetectHelloWorldWords()
        {
            using (HttpClient client = new HttpClient())
            {
                var controller = new HomeController();
                var result = controller.Title();
                string title = (result != null) ? result.Value.ToString() : string.Empty;
                Assert.Contains("Hello World", title);                
            }                
        }
    }
}

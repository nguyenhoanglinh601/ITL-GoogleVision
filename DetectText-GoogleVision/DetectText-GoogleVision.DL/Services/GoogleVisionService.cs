using DetectText_GoogleVision.DL.IService;
using Microsoft.AspNetCore.Http;
using System;
using System.Drawing;
using System.IO;
using System.Net;

namespace DetectText_GoogleVision.DL.Services
{
    public class GoogleVisionService : IGoogleVisionService
    {
        public string URLbase = "https://vision.googleapis.com/v1/images:annotate?";
        public string keyGoogleVision = "AIzaSyBwVGJ0CozXi4439SO4TBMWDrEv5qNnx70";

        public string GetClientAPI()
        {
            string URLfield = "fields=responses(textAnnotations((description),(boundingPoly)))";
            string URL = URLbase + URLfield + "&key=" + keyGoogleVision;
            return URL;
        }
        public string JSONRequest(string base64String)
        {
            string jsonRequest = "{\"requests\":[{\"image\":{\"content\":\"" + base64String + "\"},\"features\":[{\"type\":\"TEXT_DETECTION\",\"maxResults\":1}]}]}";
            return jsonRequest;
        }

        public string ImageFromURL(string URL)
        {
            using (WebClient webClient = new WebClient())
            {
                byte[] data = webClient.DownloadData(URL);
                using (MemoryStream mem = new MemoryStream(data))
                {
                    using (var image =  Image.FromStream(mem))
                    {
                        string base64String = string.Empty;
                        using (MemoryStream m = new MemoryStream())
                        {
                            image.Save(m, image.RawFormat);
                            byte[] imageBytes = m.ToArray();
                            base64String = Convert.ToBase64String(imageBytes);
                        }
                        return base64String;
                    }
                }
            }
        }

        public string ImageFromFile(IFormFile file)
        {
            string base64String = string.Empty;
            using (var ms = new MemoryStream())
            {
                file.CopyTo(ms);
                var fileBytes = ms.ToArray();
                base64String = Convert.ToBase64String(fileBytes);
            }
            return base64String;
        }
    }
}

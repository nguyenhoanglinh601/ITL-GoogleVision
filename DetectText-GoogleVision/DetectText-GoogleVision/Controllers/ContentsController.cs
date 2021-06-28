using DetectText_GoogleVision.DL.IService;
using DetectText_GoogleVision.DL.Models;
using DetectText_GoogleVision.DL.Models.ModelForGoogleAPI;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;

//using Google.Cloud.Vision.V1;
using System;
using Alturos.Yolo;
using Alturos.Yolo.Model;
using System.IO;
using System.Linq;
using static DetectText_GoogleVision.Service.Models.ModelForGoogleAPI.ResponseGoogleVision;

namespace DetectText_GoogleVision.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentsController : ControllerBase
    {
        private readonly IGoogleVisionService _googleVisionService;
        private readonly ICategoryObjectService<ResponseGoogleVisionModel.TextAnnotation> _categoryObjectService;

        public ContentsController(IGoogleVisionService googleVisionService, ICategoryObjectService<ResponseGoogleVisionModel.TextAnnotation> categoryObjectService)
        {
            _googleVisionService = googleVisionService;
            _categoryObjectService = categoryObjectService;
        }


        [HttpGet]
        public ActionResult<string> Get()
        {
            return "Successful !!!";
        }
        //Get Full Description from Response 
        [HttpPost("GetTextAnnotation")]
        public ActionResult<List<ResponseGoogleVisionModel.TextAnnotation>> GetTextAnnotation(IFormFile file)
        {
            string URLGoogleVision = _googleVisionService.GetClientAPI();
            string byte64String = _googleVisionService.ImageFromFile(file);
            string jsonRequest = _googleVisionService.JSONRequest(byte64String);
            using (WebClient wc = new WebClient())
            {
                wc.Headers[HttpRequestHeader.ContentType] = "application/json";
                string HtmlResult = wc.UploadString(URLGoogleVision, jsonRequest);
                List<ResponseGoogleVisionModel.TextAnnotation> result = _categoryObjectService.GetTextAnnotation(HtmlResult);
                return result;
            }
        }


        //////Get Price and TaxCode 
        ////[HttpPost("DistancePriceAndTaxCode")]
        ////public ActionResult<List<DistanceOfItems>> DistancePriceAndTaxCode(IFormFile file)
        ////{
        ////    string URLGoogleVision = _googleVisionService.GetClientAPI();
        ////    string byte64String = _googleVisionService.ImageFromFile(file);
        ////    string jsonRequest = _googleVisionService.JSONRequest(byte64String);
        ////    using (WebClient wc = new WebClient())
        ////    {
        ////        wc.Headers[HttpRequestHeader.ContentType] = "application/json";
        ////        string HtmlResult = wc.UploadString(URLGoogleVision, jsonRequest);
        ////        List<DistanceOfItems> result = _categoryObjectService.DistancePriceAndTaxCode(HtmlResult);
        ////        return result;
        ////    }
        ////}

        //Get all
        [HttpPost("GetAllFromImage")]
        public ActionResult<List<ListItemsModel>> GetAllFromImage(IFormFile file)
        {
            ////var repository = new YoloPreTrainedDatasetRepository();
            //// repository.DownloadDatasetAsync("YOLOv3", ".");
            //var configurationDetector = new YoloConfigurationDetector();
            //var config = configurationDetector.Detect();
            //using (var yoloWrapper = new YoloWrapper(config))
            //{
            //    //var items = yoloWrapper.Detect(@"image.jpg");

            //    using (MemoryStream ms = new MemoryStream())
            //    {
            //        file.CopyTo(ms);
            //        var items = yoloWrapper.Detect(ms.ToArray()).ToList();
            //        List<List<Vertex>> listVertexOfObject = _categoryObjectService.getCoordinates(items);
            //        string URLGoogleVision = _googleVisionService.GetClientAPI();
            //        string byte64String = _googleVisionService.ImageFromFile(file);
            //        string jsonRequest = _googleVisionService.JSONRequest(byte64String);
            //        using (WebClient wc = new WebClient())
            //        {
            //            wc.Headers[HttpRequestHeader.ContentType] = "application/json";
            //            string HtmlResult = wc.UploadString(URLGoogleVision, jsonRequest);
            //            List<ListItemsModel> result = _categoryObjectService.GetAll(HtmlResult, listVertexOfObject);
            //            return result;
            //        }
            //    }
            //}
            string URLGoogleVision = _googleVisionService.GetClientAPI();
            string byte64String = _googleVisionService.ImageFromFile(file);
            string jsonRequest = _googleVisionService.JSONRequest(byte64String);
            using (WebClient wc = new WebClient())
            {
                wc.Headers[HttpRequestHeader.ContentType] = "application/json";
                string HtmlResult = wc.UploadString(URLGoogleVision, jsonRequest);
                List<ListItemsModel> result = _categoryObjectService.GetAll(HtmlResult);
                return result;
            }
        }
        ////Get TicketNumber and TaxCode
        //[HttpPost("DistanceTicketNumberAndTaxCode")]
        //public ActionResult<List<DistanceOfItems>> DistanceTicketNumberAndTaxCode(IFormFile file)
        //{
        //    string URLGoogleVision = _googleVisionService.GetClientAPI();
        //    string byte64String = _googleVisionService.ImageFromFile(file);
        //    string jsonRequest = _googleVisionService.JSONRequest(byte64String);
        //    using (WebClient wc = new WebClient())
        //    {
        //        wc.Headers[HttpRequestHeader.ContentType] = "application/json";
        //        string HtmlResult = wc.UploadString(URLGoogleVision, jsonRequest);
        //        List<DistanceOfItems> result = _categoryObjectService.DistanceTicketNumberAndTaxCode(HtmlResult);
        //        return result;
        //    }
        //}

        ////Get Ticket is categorized 
        //[HttpPost("CategoryTicketFromFileImage")]
        //public ActionResult<List<ListItems>> CategoryTicketFromFileImage(IFormFile file)
        //{
        //    string URLGoogleVision = _googleVisionService.GetClientAPI();
        //    string byte64String = _googleVisionService.ImageFromFile(file);
        //    string jsonRequest = _googleVisionService.JSONRequest(byte64String);
        //    using (WebClient wc = new WebClient())
        //    {
        //        wc.Headers[HttpRequestHeader.ContentType] = "application/json";
        //        string HtmlResult = wc.UploadString(URLGoogleVision, jsonRequest);
        //        List<ListItems> result = _categoryObjectService.MergeTwoObject(HtmlResult);
        //        return (result);
        //    }
        //}

        //From URL
        //[HttpPost("GetAllFromURLImage")]
        //public ActionResult<List<ListItemsModel>> GetAllFromURLImage(string URL)
        //{
        //    string URLGoogleVision = _googleVisionService.GetClientAPI();
        //    string byte64String = _googleVisionService.ImageFromURL(URL);
        //    string jsonRequest = _googleVisionService.JSONRequest(byte64String);
        //    using (WebClient wc = new WebClient())
        //    {
        //        wc.Headers[HttpRequestHeader.ContentType] = "application/json";
        //        string HtmlResult = wc.UploadString(URLGoogleVision, jsonRequest);
        //        List<ListItemsModel> result = _categoryObjectService.GetAll(HtmlResult);
        //        return result;
        //    }
        //}
    }
}
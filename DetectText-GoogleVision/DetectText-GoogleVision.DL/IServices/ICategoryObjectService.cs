
using Alturos.Yolo.Model;
using DetectText_GoogleVision.DL.Models;
using System.Collections.Generic;
using static DetectText_GoogleVision.Service.Models.ModelForGoogleAPI.ResponseGoogleVision;
//using Google.Cloud.Vision.V1;

namespace DetectText_GoogleVision.DL.IService
{
    public interface ICategoryObjectService<T>
    {
        List<T> GetTextAnnotation(string HtmlResult);
        //List<LocalizedObject> test(string HtmlResult);
        List<T> GetItemWithTaxCode(string HtmlResult);
        List<T> GetItemWithTicketNumber(string HtmlResult);
        List<T> GetItemWithPrice(string HtmlResult);
        //List<DistanceOfItems> DistancePriceAndTaxCode(string HtmlResult);
        //List<DistanceOfItems> DistanceTicketNumberAndTaxCode(string HtmlResult);
         List<ListItemsModel> GetListValue(List<T> listTaxCode, List<T> listTicket, List<T> listPrice);
        List<ListItemsModel> GetAll(string HtmlResult/*, List<List<Vertex>> listVertexOfObject*/);
        //List<ListItems> MergeTwoObject(string HtmlResult);
         bool checkInside(List<Vertex> listVertex, T vertex);
         List<List<Vertex>> getCoordinates(List<YoloItem> yoloItems);
    }
}

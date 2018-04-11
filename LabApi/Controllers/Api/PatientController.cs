using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LabApi.Controllers.Api
{
    public class myTestData
    {
        public string Name { get; set; }
        public string LocationName { get; set; }
        public string LocationAddress { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }
    public class PatientController : ApiController
    {
        private LabAppDbEntities Db;
        public PatientController()
        {
            //Db = new LabAppDbEntities();
        }

        [HttpGet]
        public IHttpActionResult GetPatient()
        {
            //var myThisDta = new myTestData()
            //{
            //    Name = "Usman",
            //    LocationName = "Sidiq Trade Centre",
            //    LocationAddress = "Sidiq Trade Centre",
            //    Latitude = "1111",
            //    Longitude = "22222"
            //};
            return Ok();
        }

        [HttpPost]
        public IHttpActionResult PostPatient(myTestData patient)
        {
            return Ok(patient);
        }

    }
}

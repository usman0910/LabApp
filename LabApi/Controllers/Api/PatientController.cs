using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LabApi.Controllers.Api
{
    public class PatientController : ApiController
    {
        private LabAppDbEntities Db;
        public PatientController()
        {
            Db = new LabAppDbEntities();
        }
        [HttpGet]
        public IHttpActionResult GetPatient()
        {
            return Ok();
        }

        [HttpPost]
        public IHttpActionResult AddPatient()
        {
            return Ok();
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public class Email
    {
        public Email()
        {
            listEmialDetails = new List<EmailDetails>();
        }
        public string Title { get; set; }
        public string Body { get; set; }
        public List<EmailDetails> listEmialDetails { get; set; }
        public string EmailFrom { get;  set; }
    }

    public class EmailDetails
    {
        public string MailTo { get; set; }
        public string LOG { get; set; } = "SEND SUCCESS";
        public StatusSendEmail StatusSendEmai { get; set; }

    }
    public enum StatusSendEmail
    {
        FAIL = 0,
        SUCCESS = 1,
        ISSEND = 2
    }

}

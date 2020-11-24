using CoronaContactRegistration.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoronaContactRegistration.Services
{
    public class ContactInformationService
    {
        private readonly IMongoCollection<ContactInformation> _records;

        public ContactInformationService(IContactInformationDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _records = database.GetCollection<ContactInformation>(settings.ContactInformationCollectionName);
        }

        public List<ContactInformation> Get()
        {
            return _records.Find(ci => true).ToList();
        }

        public ContactInformation Get(string id)
        {
            return _records.Find(ci => ci.Id == id).FirstOrDefault();
        }

        public ContactInformation Create(ContactInformation contactInformation)
        {
            _records.InsertOne(contactInformation);

            return contactInformation;
        }

        public void Update(string id, ContactInformation contactInformation)
        {
            _records.ReplaceOne(ci => ci.Id == id, contactInformation);
        }

        public void Remove(ContactInformation contactInformation)
        {
            _records.DeleteOne(ci => ci.Id == contactInformation.Id);
        }

        public void Remove(string id)
        {
            _records.DeleteOne(ci => ci.Id == id);
        }
    }
}

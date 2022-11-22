﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.interfaces
{
    public interface IChucVu
    {
        Task<Data.SQLConnection.SQLObject.APIresult> GetNoiQuiasync(Model.NoiQui NoiQui);
        Task<Data.SQLConnection.SQLObject.APIresult> UpdateNoiQuiasync(Model.NoiQui NoiQui);
        Task<Data.SQLConnection.SQLObject.APIresult> DeleteNoiQuiasync(Model.NoiQui NoiQui);
    }
}

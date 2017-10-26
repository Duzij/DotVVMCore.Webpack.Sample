using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using DotVVM.Framework.ViewModel;

namespace DotVVMCore.Webpack.Sample.ViewModels
{
    public class DefaultViewModel : MainViewModel
    {
        
        public string Title { get; set; }


        public DefaultViewModel()
        {
            Title = "Hello from DotVVM!";
        }

    }
}

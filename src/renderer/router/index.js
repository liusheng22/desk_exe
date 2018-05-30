import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component : require('@/components/Login/Login').default
    // },
    {
      // path: '/main',
      path: '/',
      component: require('@/components/Main').default
    },
    {
      path: '/sys', //1.系统状态
      component: require('@/components/SystemState/Index').default,
    },
    {
      path : '/xtzk', //1.系统状态 => 系统状况
      component : require('@/components/SystemState/SysState').default
    },
    {
      path : '/txzt', //1.系统状态 => 通信状态
      component : require('@/components/SystemState/ComState').default
    },
    {
      path : '/history',  //2.历史数据
      component : require('@/components/HistoryData/Index').default
    },
    {
      path : '/type',  //2.历史数据 => 电表数据类型
      component : require('@/components/HistoryData/ElecDataType').default
    },
    {
      path : '/freeze',  //2.历史数据 => 电表数据类型 => 分钟冻结数据
      component : require('@/components/HistoryData/MinFreezeData').default
    },
    {
      path : '/date',  //2.历史数据 => 电表数据类型 => 分钟冻结数据
      component : require('@/components/HistoryData/DatePicker').default
    },
    {
      path : '/tele',  //2.历史数据 => 电表数据类型 => 遥测数据
      component : require('@/components/HistoryData/TelemeasuringData').default
    },
    {
      path : '/day',  //2.历史数据 => 电表数据类型 => 日数据
      component : require('@/components/HistoryData/DayData').default
    },
    {
      path : '/month',  //2.历史数据 => 电表数据类型 => 月数据
      component : require('@/components/HistoryData/MonthData').default
    },
    {
      path : '/event',  //2.历史数据 => 电表数据类型 => 事件数据
      component : require('@/components/HistoryData/EventData').default
    },
    {
      path : '/real',  //2.历史数据 => 电表数据类型 => 实时数据 
      component : require('@/components/HistoryData/RealData').default
    },
    {
      path : '/param',  //3.系统参数 
      component : require('@/components/SystemParam/Index').default
    },
    {
      path : '/inter',  //3.系统参数 => 以太网设置
      component : require('@/components/SystemParam/InterSetting').default
    },
    {
      path : '/pwd',  //3.系统参数 => 密码设置
      component : require('@/components/SystemParam/PwdSetting').default
    },
    {
      path : '/clock',  //3.系统参数 => 时钟设置
      component : require('@/components/SystemParam/ClockSetting').default
    },
    {
      path : '/close',  //3.系统参数 => 关闭系统
      component : require('@/components/SystemParam/CloseSys').default
    },
    {
      path : '/reload',  //3.系统参数 => 重启系统
      component : require('@/components/SystemParam/ReloadSys').default
    },
    {
      path : '/overload',  //3.系统参数 => 重载系统
      component : require('@/components/SystemParam/OverloadSys').default
    },
    {
      path : '/log',  //3.系统参数 => 查看日志
      component : require('@/components/SystemParam/ViewLog').default
    },
    {
      path : '/manage',  //3.系统参数 => 查看日志 => 管理程序日志
      component : require('@/components/SystemParam/ManageParamLog').default
    },
    {
      path : '/elec',  //3.系统参数 => 电表设置
      component : require('@/components/SystemParam/ElecMeterSetting').default
    },
    {
      path : '/addelec',  //3.系统参数 => 电表设置 => 添加电表
      component : require('@/components/SystemParam/AddElecMeter').default
    },
    {
      path : '/params',  //3.系统参数 => 电表设置 => 修改电表
      component : require('@/components/SystemParam/ParamSetting').default
    },
    {
      path : '/pick',  //3.系统参数 => 电表设置 => 修改电表 => 选择数据
      component : require('@/components/SystemParam/PickMeterData').default
    },
    {
      path : '/station',  //3.系统参数 => 主站设置
      component : require('@/components/SystemParam/MasterStationSetting').default
    },
    {
      path : '/amend',  //3.系统参数 => 主站设置 => 修改规约参数
      component : require('@/components/SystemParam/AmendProtocolParams').default
    },
    {
      path : '/pickelec',  //3.系统参数 => 主站设置 => 修改规约参数 => 
      component : require('@/components/SystemParam/PickElec').default
    },
    {
      path : '/time',  //3.系统参数 => 系统对时
      component : require('@/components/SystemParam/SysCorrectTime').default
    },
    {
      path : '/reread',  //3.系统参数 => 数据重读
      component : require('@/components/SystemParam/DataReread').default
    },
    {
      path : '/version',  //3.系统参数 => 版本信息
      component : require('@/components/SystemParam/VersionInfo').default
    },
    {
      path : '/linelist',  //4.设备信息 => 线路列表
      component : require('@/components/EquipmentInfo/Index').default
    },
    {
      path : '/eleclist',  //4.设备信息 => 电表设备列表
      component : require('@/components/EquipmentInfo/ElecEquiList').default
    },
    {
      path : '/info',  //4.设备信息 => 电表设备列表 => 电表设备信息
      component : require('@/components/EquipmentInfo/ElecEquiInfo').default
    },
    {
      path : '/linemanage',  //5.线路管理
      component : require('@/components/LineManagement/Index').default
    },
    {
      path : '/line',  //5.线路管理 => 线路管理
      component : require('@/components/LineManagement/LineManage').default
    },
    {
      path : '/protocol',  //5.线路管理 => 规约管理
      component : require('@/components/LineManagement/ProtocolManage').default
    },
    {
      path : '/ammeter',  //5.线路管理 => 电表管理
      component : require('@/components/LineManagement/AmmeterManage').default
    },
    {
      path : '/master',  //5.线路管理 => 主站管理
      component : require('@/components/LineManagement/MasterManage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

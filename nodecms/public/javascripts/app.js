/**
 * Created by panzhu on 2015/5/13.
 */
'use strict';
var titles = ['Miss', 'Mr', 'Mrs', 'Ms'];
var instant_messengers = ['Skype', 'WeChat', 'QQ'];
var emptyOptions = ['- Select a value -'];
var qualificationTypes = ['Senior High School', 'GCSE', 'A Level', 'Foundation',
    'International Barcheloo', 'European Barcheloo', 'UK Honours Undergraduate Degree',
    'Non-UK Honours Undergraduate Degree', 'UK Honours Postgraduate Degree', 'Non-UK Honours Postgraduate Degree', 'others'];

var countries = countries || ['澳大利亚', '加拿大', '中国', '香港特别行政区，中国', '新加坡', '英国', '美国', '台湾', '阿富汗', '奥兰群岛', '阿尔巴尼亚', '阿尔及利亚', '美属萨摩亚群岛', '安道尔', '安哥拉', '安圭拉', '南极洲', '安提瓜和巴布达', '阿根廷', '亚美尼亚', '阿鲁巴', '澳大利亚', '奥地利', '阿塞拜疆', '巴哈马', '巴林', '孟加拉国', '巴巴多斯', '白俄罗斯', '比利时', '伯利兹', '贝宁', '百慕达群岛', '不丹', '玻利维亚', '波斯尼亚和黑塞哥维那', '博茨瓦那', '布维岛', '巴西', '英属印度洋领地', '英属维京群岛', '文莱', '保加利亚', '布基纳法索', '布隆迪', '柬埔寨', '喀麦隆', '加拿大', '佛得角', '荷兰加勒比区', '开曼群岛', '中非共和国', '乍得', '智利', '中国', '圣诞岛', '科科斯（基林）群岛', '哥伦比亚', '科摩罗', '刚果(布拉柴维尔)', '刚果(金沙萨)', '库克群岛', '哥斯达黎加', '克罗地亚', '古巴', '库拉索', '塞浦路斯', '捷克共和国', '丹麦', '吉布提', '多米尼加', '多米尼加共和国', '厄瓜多尔', '埃及', '萨尔瓦多', '赤道几内亚', '厄立特里亚', '爱沙尼亚', '埃塞俄比亚', '福克兰群岛', '法罗群岛', '斐济', '芬兰', '法国', '法属圭亚那', '法属波利尼西亚', '法属南部领土', '加蓬', '冈比亚', '格鲁吉亚', '德国', '加纳', '直布罗陀', '希腊', '格陵兰岛', '格林纳达', '瓜德罗普岛', '关岛', '危地马拉', '根西岛', '几内亚', '几内亚比绍', '圭亚那', '海地', '赫德岛和麦克唐纳群岛', '洪都拉斯', '香港特别行政区，中国', '匈牙利', '冰岛', '印度', '印度尼西亚', '伊朗', '伊拉克', '爱尔兰', '马恩岛', '以色列', '意大利', '象牙海岸', '牙买加', '日本', '泽西岛', '约旦', '哈萨克斯坦', '肯尼亚', '基里巴斯', '科威特', '吉尔吉斯斯坦', '老挝', '拉脱维亚', '黎巴嫩', '莱索托', '利比里亚', '利比亚', '列支敦士登', '立陶宛', '卢森堡', '澳门特别行政区，中国', '马其顿', '马达加斯加', '马拉维', '马来西亚', '马尔代夫', '马里', '马耳他', '马绍尔群岛', '马提尼克岛', '毛里塔尼亚', '毛里求斯', '马约特岛', '墨西哥', '密克罗尼西亚', '摩尔多瓦', '摩纳哥', '蒙古', '黑山', '蒙特塞拉特岛', '摩洛哥', '莫桑比克', '缅甸', '纳米比亚', '瑙鲁', '尼泊尔', '荷兰', '荷属安的列斯岛', '新喀里多尼亚', '新西兰', '尼加拉瓜', '尼日尔', '尼日利亚', '纽埃', '诺福克岛', '北马里亚纳群岛', '朝鲜', '挪威', '阿曼', '巴基斯坦', '帕劳群岛', '巴勒斯坦', '巴拿马', '巴布亚新几内亚', '巴拉圭', '秘鲁', '菲律宾', '皮特克恩岛', '波兰', '葡萄牙', '波多黎各', '卡塔尔', '留尼旺岛', '罗马尼亚', '俄罗斯', '卢旺达', '圣巴托洛缪岛', '圣海伦娜', '圣基茨和尼维斯', '圣卢西亚', '圣马丁(法属)', '圣皮埃尔和密克隆岛', '圣文森特和格林纳丁斯', '萨摩亚', '圣马力诺', '圣多美和普林西比', '沙特阿拉伯', '塞内加尔', '塞尔维亚', '塞舌尔群岛', '塞拉利昂', '新加坡', '圣马丁岛', '斯洛伐克', '斯罗文尼亚', '所罗门群岛', '索马里', '南非', '南乔治亚岛和南桑威奇群岛', '韩国', '南苏丹', '西班牙', '斯里兰卡', '苏丹', '苏里南河', '斯瓦尔巴岛和扬马延岛', '史瓦济兰', '瑞典', '瑞士', '叙利亚', '台湾', '塔吉克斯坦', '坦桑尼亚', '泰国', '东帝汶', '多哥', '托克劳群岛', '汤加', '特立尼达和多巴哥', '突尼斯', '土耳其', '土库曼尼斯坦', '特克斯和凯科斯群岛', '图瓦鲁', '美属维京群岛', '乌干达', '乌克兰', '阿拉伯联合酋长国', '英国', '美国', '美国本土外小岛屿', '乌拉圭', '乌兹别克斯坦', '南太平洋的岛国', '梵谛冈', '委内瑞拉', '越南', '瓦利斯和富图纳', '西撒哈拉', '也门', '赞比亚', '津巴布韦'];

var ethnicities = ['Arab', 'Asian - other background', 'Asian or Asian British - Bangladeshi', 'Asian or Asian British - Indian', 'Asian or Asian Birtish - Pakistani', 'Black - other background', 'Black or Black British - African', 'Black or Black British -Caribbean', 'Chinese', 'Gypsy or Traveller', 'Information refused', 'Mixed - other background', 'Mixed - White and Asian', 'Mixed - White and Black African', 'Mixed - White and Black Caribbean', 'Other Ethnic background', 'White'];

var disabilities = ['2 or more Impairments/med conditions', 'Autistic Spectrum Disorder', 'Disability Not Listed', 'Hearing Impairment', 'Learning Difficulty', 'Mental Health Disability', 'Mobility Difficulties', 'No Disability', 'Unseen Disability', 'Visual Impairment'];

var supportedLanguage = ['en', 'zh-cn'];
var defaultLanguage = defaultLanguage || (/myoffer\.com/i.test(window.location.hostname) ? 'en' : 'zh-cn');
var target_countries = target_countries || ['英国', '澳大利亚'];
var dateList = dateList || ['2016', '2017', '2018+'];
var gradeList = gradeList || ['本科大四', '本科大三', '大专大三', '大专大二', '高三', '高二', '高一', '初三', '初二', '初一', '硕士毕业已工作', '硕士在读', '本科毕业已工作', '本科大二', '本科大一', '大专毕业三年及以上', '大专毕业三年以下', '大专大一', '高三毕业已工作'];
var universityScores = universityScores || [
        {'description': '95分 - 100分', 'value': 100},
        {'description': '90分 - 94分', 'value': 94},
        {'description': '85分 - 89分', 'value': 89},
        {'description': '80分 - 84分', 'value': 84},
        {'description': '75分 - 79分', 'value': 79},
        {'description': '70分 - 74分', 'value': 74},
        {'description': '65分 - 69分', 'value': 69},
        {'description': '60分 - 64分', 'value': 64},
        {'description': '55分 - 59分', 'value': 59},
        {'description': '50分 - 54分', 'value': 54},
        {'description': '50分以下', 'value': 50}
    ];

var homeSearch_menuTitles = homeSearch_menuTitles || ['地理位置', '科学领域', '专业名称', '大学院校', '大学排名'];
var homeSearch_states = homeSearch_states || [
        ['英格兰', '苏格兰', '北爱尔兰', '威尔士'],
        ['纽约州', '俄亥俄州', '俄勒冈州', '华盛顿州', '加利福尼亚州', '佛罗里达州', '密西西比州', '夏威夷州', '印第安纳州', '堪萨斯州', '明尼苏达州', '新泽西州', '新墨西哥州']
    ];
var homeSearch_cities = homeSearch_cities || [
        [
            ['伦敦', '伯明翰', '布里斯托', '曼彻斯特', '纽卡斯尔', '利兹', '利物浦', '诺丁汉', '谢菲尔德', '剑桥', '牛津'],
            ['爱丁堡', '阿伯丁', '格拉斯哥', '圣安德鲁斯'],
            ['纽敦纳兹', '班戈尔', '班布里奇', '贝尔法斯特', '利斯本', '安特里姆', '巴利米纳', '巴利马尼', '卡里克弗格斯', '拉恩', '莫伊尔', '纽敦阿比'],
            ['卡迪夫', '新港', '斯旺西', '圣达维斯', '班戈']
        ],
        [
            ['纽约', '罗彻斯特', '水牛城', '奥尔巴尼', '雪城'],
            ['哥伦布', '克利夫兰', '辛辛那提', '托莱多', '阿克伦', '斯普林菲尔德', '代顿', '坎顿', '曼斯菲尔德', '帕尔马'],
            ['波特兰', '塞勒姆', '尤金', '科瓦利斯'],
            ['西雅图', '雷德蒙', '温哥华']
        ]
    ];
var homeSearch_country_list = homeSearch_country_list || ['英国', '美国', '澳大利亚', '加拿大', '新西兰'];
var homeSearch_state_list = homeSearch_state_list || ['英格兰', '苏格兰', '北爱尔兰', '威尔士'];

var partnership_corporations = partnership_corporations || ['客户渠道', '媒体内容', '境外资源', '留学导师', '院校机构'];
var partnership_errors = partnership_errors || ['请填写姓名/名称', '请填写姓氏', '请选择国家', '请填写电话号码', '请填写所在行业', '请填写所在城市', '请选择合作类型', '请填写Email'];
var partnership_success = partnership_success || '发送成功';

var faq_categoryList = faq_categoryList || ['常规问题', '申请准备', '如何申请', '提交申请以后', '收到录取通知书', '技术问题', '其它问题'];

var aboutus_typeOptions = aboutus_typeOptions || ['咨询热线', '工作机会', '合作伙伴'];
var aboutus_errors = aboutus_errors || ['请选择联系类别', '请填写你的邮箱地址', '请填写你的全名', '请填写内容'];
var aboutus_success = aboutus_success || '发送成功!';

var searchResult_total = searchResult_total || '全部';
var searchResult_descriptions = searchResult_descriptions || ['学科领域', '专业方向'];

var searchResult_starNames = searchResult_starNames || ['1星', '2星', '3星', '4星', '5星'];
var searchResult_rankType_local = searchResult_rankType_local || '本国排名';
var searchResult_country_aus = searchResult_country_aus || '澳大利亚';

var recommendation_descriptions = recommendation_descriptions || ['你可能的冲刺学校', '你可能感兴趣的学校', '你可能的保底学校'];

var university_levels = university_levels || ['全部', '本科预科', '本科', '硕士预科', '硕士'];
var university_total = university_total || '全部';
var university_scoreTypes = university_scoreTypes || ['课程质量', '社交活动', '住宿条件', '学生会　', '城市生活', '学校设施', '学生支持', '工作支持'];
var university_pieLabels = university_pieLabels || ['当地学生', '国际学生'];
var university_barLabels = university_barLabels || ['申请成功率', '平均', '我的'];

var generic_save_success = generic_save_success || '保存成功!';
var generic_confirm_delete = generic_confirm_delete || '确认删除?';
var generic_update_success = generic_update_success || '更新成功!';
var vcode_again_text=vcode_again_text || "重新发送";
var mobile_codes = mobile_codes || ['中国大陆(86)', '英国(44)'];
var mobile_sent = mobile_sent || '已发送';
var mobile_vcode_sent = mobile_vcode_sent || '验证码已发送!';
var mobile_get_vcode = mobile_get_vcode || '获取验证码';
var mobile_send_vcode = mobile_send_vcode || '发送验证码';
var login_tips = login_tips || ['手机号码是必填的哦!','你见过这么短的手机号码吗？','手机号码太长了，我记不住。','密码是必填的哦!','密码太短，不安全','密码太长，我怕你忘记了','两次密码都不一样，你是逗我吗？','验证码是必填的哦！','我发给你的验证码没那么短！','我发给你的验证码没那么长！','不填写手机号码怎么登录？','你的密码没这么短哦！','你的密码没这么长哦！','邮箱格式不对哦！','手机号码没有0开头的哦！','内容不能为空','请填写正确的手机号码哟']
var application_checkinSuccess = application_checkinSuccess || '提交成功!';
var application_checkinPartialFail = application_checkinPartialFail || '提交未能全部成功!';

var account_password_reset_success = account_password_reset_success || '密码重置成功, 正在跳转...';

var searchFilter_all = searchFilter_all || '所有';

var feedback_type_list = feedback_type_list || ['网站功能', '版式内容', '投诉建议', '其他'];
var feedback_messages = feedback_messages || ['感谢您的反馈，我们正在接受...', '已接受您的反馈，谢谢'];

var cart_success = cart_success || '添加成功';

var id_types = id_types || ['身份证', '护照'];

var invite_user_to_be_partner_success = invite_user_to_be_partner_success || '邀请用户成功，已发送确认邮件！';

var applyDegreePrompt_1 = applyDegreePrompt_1 || '亲，海外大学硕士课程对提供本科三年（六学期）成绩单的申请人，给予审核与评估，发放录取结果。' +
    '系统显示，现在您暂未满足此条件，我们会在您满足此条件后，再做评估。在此期间，您的申请会处于等候状态。如有更多疑问，' +
    '请与我们直接联系。电话4000 666 522';
var applyDegreePrompt_2 = applyDegreePrompt_2 || '亲，海外大学本科课程对提供高中两年完整成绩的申请人，给予审核与评估，发放录取结果。系统显示，' +
    '现在您暂未满足此条件，我们会在您满足此条件后，再做评估。在此期间，您的申请会处于等候状态。如有更多疑问，请与我们直' +
    '接联系。电话4000 666 522';
var applyDegreePrompt_3 = applyDegreePrompt_3 || "亲，海外大学硕士课程对提供本科两年完整成绩单的申请人，给予审核与评估，发放录取结果。系统显示，" +
    "现在您暂未满足此条件，我们会在您满足此条件后，再做评估。在此期间，您的申请会处于等候状态。如有更多疑问，请与我们直接" +
    "联系。电话4000 666 522";

var application_doc_mytips = application_doc_mytips || ['上传成功', '信息填写不完整', '保存成功', '删除成功', '还有资料审核未通过没有处理哦', '上传文件不完整，不能提交', '资料提交成功'];
var application_doc_head_title = application_doc_head_title || '请提供以下信息资料，以便于我们的后续申请工作。我们会在您提交审核后尽快与您取得联系。';

var provinceCity = {
    "北京": {
        "name": "北京",
        "cities": ["西城", "东城", "崇文", "宣武", "朝阳", "海淀", "丰台", "石景山", "门头沟", "房山", "通州", "顺义", "大兴", "昌平", "平谷", "怀柔", "密云", "延庆"]
    },
    "天津": {
        "name": "天津",
        "cities": ["青羊", "河东", "河西", "南开", "河北", "红桥", "塘沽", "汉沽", "大港", "东丽", "西青", "北辰", "津南", "武清", "宝坻", "静海", "宁河", "蓟县", "开发区"]
    },
    "河北": {"name": "河北", "cities": ["石家庄", "秦皇岛", "廊坊", "保定", "邯郸", "唐山", "邢台", "衡水", "张家口", "承德", "沧州", "衡水"]},
    "山西": {"name": "山西", "cities": ["太原", "大同", "长治", "晋中", "阳泉", "朔州", "运城", "临汾"]},
    "内蒙古": {"name": "内蒙古", "cities": ["呼和浩特", "赤峰", "通辽", "锡林郭勒", "兴安"]},
    "辽宁": {
        "name": "辽宁",
        "cities": ["大连", "沈阳", "鞍山", "抚顺", "营口", "锦州", "丹东", "朝阳", "辽阳", "阜新", "铁岭", "盘锦", "本溪", "葫芦岛"]
    },
    "吉林": {"name": "吉林", "cities": ["长春", "吉林", "四平", "辽源", "通化", "延吉", "白城", "辽源", "松原", "临江", "珲春"]},
    "黑龙江": {"name": "黑龙江", "cities": ["哈尔滨", "齐齐哈尔", "大庆", "牡丹江", "鹤岗", "佳木斯", "绥化"]},
    "上海": {
        "name": "上海",
        "cities": ["浦东", "杨浦", "徐汇", "静安", "卢湾", "黄浦", "普陀", "闸北", "虹口", "长宁", "宝山", "闵行", "嘉定", "金山", "松江", "青浦", "崇明", "奉贤", "南汇"]
    },
    "江苏": {
        "name": "江苏",
        "cities": ["南京", "苏州", "无锡", "常州", "扬州", "徐州", "南通", "镇江", "泰州", "淮安", "连云港", "宿迁", "盐城", "淮阴", "沐阳", "张家港"]
    },
    "浙江": {"name": "浙江", "cities": ["杭州", "金华", "宁波", "温州", "嘉兴", "绍兴", "丽水", "湖州", "台州", "舟山", "衢州"]},
    "安徽": {"name": "安徽", "cities": ["合肥", "马鞍山", "蚌埠", "黄山", "芜湖", "淮南", "铜陵", "阜阳", "宣城", "安庆"]},
    "福建": {"name": "福建", "cities": ["福州", "厦门", "泉州", "漳州", "南平", "龙岩", "莆田", "三明", "宁德"]},
    "江西": {"name": "江西", "cities": ["南昌", "景德镇", "上饶", "萍乡", "九江", "吉安", "宜春", "鹰潭", "新余", "赣州"]},
    "山东": {
        "name": "山东",
        "cities": ["青岛", "济南", "淄博", "烟台", "泰安", "临沂", "日照", "德州", "威海", "东营", "荷泽", "济宁", "潍坊", "枣庄", "聊城"]
    },
    "河南": {
        "name": "河南",
        "cities": ["郑州", "洛阳", "开封", "平顶山", "濮阳", "安阳", "许昌", "南阳", "信阳", "周口", "新乡", "焦作", "三门峡", "商丘"]
    },
    "湖北": {
        "name": "湖北",
        "cities": ["武汉", "襄樊", "孝感", "十堰", "荆州", "黄石", "宜昌", "黄冈", "恩施", "鄂州", "江汉", "随枣", "荆沙", "咸宁"]
    },
    "湖南": {
        "name": "湖南",
        "cities": ["长沙", "湘潭", "岳阳", "株洲", "怀化", "永州", "益阳", "张家界", "常德", "衡阳", "湘西", "邵阳", "娄底", "郴州"]
    },
    "广东": {
        "name": "广东",
        "cities": ["广州", "深圳", "东莞", "佛山", "珠海", "汕头", "韶关", "江门", "梅州", "揭阳", "中山", "河源", "惠州", "茂名", "湛江", "阳江", "潮州", "云浮", "汕尾", "潮阳", "肇庆", "顺德", "清远"]
    },
    "广西": {"name": "广西", "cities": ["南宁", "桂林", "柳州", "梧州", "来宾", "贵港", "玉林", "贺州"]},
    "海南": {"name": "海南", "cities": ["海口", "三亚"]},
    "重庆": {
        "name": "重庆",
        "cities": ["渝中", "大渡口", "江北", "沙坪坝", "九龙坡", "南岸", "北碚", "万盛", "双桥", "渝北", "巴南", "万州", "涪陵", "黔江", "长寿"]
    },
    "四川": {"name": "四川", "cities": ["成都", "达州", "南充", "乐山", "绵阳", "德阳", "内江", "遂宁", "宜宾", "巴中", "自贡", "康定", "攀枝花"]},
    "贵州": {"name": "贵州", "cities": ["贵阳", "遵义", "安顺", "黔西南", "都匀"]},
    "云南": {"name": "云南", "cities": ["昆明", "丽江", "昭通", "玉溪", "临沧", "文山", "红河", "楚雄", "大理"]},
    "西藏": {"name": "西藏", "cities": ["拉萨", "林芝", "日喀则", "昌都"]},
    "陕西": {"name": "陕西", "cities": ["西安", "咸阳", "延安", "汉中", "榆林", "商南", "略阳", "宜君", "麟游", "白河"]},
    "甘肃": {"name": "甘肃", "cities": ["兰州", "金昌", "天水", "武威", "张掖", "平凉", "酒泉"]},
    "青海": {"name": "青海", "cities": ["黄南", "海南", "西宁", "海东", "海西", "海北", "果洛", "玉树"]},
    "宁夏": {"name": "宁夏", "cities": ["银川", "吴忠"]},
    "新疆": {"name": "新疆", "cities": ["乌鲁木齐", "哈密", "喀什", "巴音郭楞", "昌吉", "伊犁", "阿勒泰", "克拉玛依", "博尔塔拉"]},
    "香港": {
        "name": "香港",
        "cities": ["中西区", "湾仔区", "东区", "南区", "九龙-油尖旺区", "九龙-深水埗区", "九龙-九龙城区", "九龙-黄大仙区", "九龙-观塘区", "新界-北区", "新界-大埔区", "新界-沙田区", "新界-西贡区", "新界-荃湾区", "新界-屯门区", "新界-元朗区", "新界-葵青区", "新界-离岛区"]
    },
    "澳门": {"name": "澳门", "cities": ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区", "路氹城"]}
}
var province = ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "香港", "澳门"];

var areaDescription = areaDescription || '学科领域';

function getIELTScores() {
    var result = [];
    for (var i = 0.0; i <= 9; i += 0.5) {
        result.push(i);
    }

    return result;
}

function getLanguageByUrl() {
    var language = window.location.pathname.split('/')[1];
    for (var i = 0; i < supportedLanguage.length; ++i) {
        if (supportedLanguage[i] == language.toLowerCase()) {
            return supportedLanguage[i];
        }
    }

    return '';
}

function getLocalizedUrl(url) {
    var language = getLanguageByUrl();

    if (url[0] != '/' && url[0] != '\\') {
        url = '/' + url;
    }
    return language ? '/' + language + url : url;
}

function onFileChange(event, id) {
    event = event || window.event;

    var target = event.srcElement || event.target;

    if (target.value) {
        $(id).hide();
    }
    else {
        $(id).show();
    }
}

function updateFile(event) {
    event = event || window.event;

    var target = event.srcElement || event.target;

    if (!target.value) {
        return;
    }

    var processingModal = angular.element('#processingModal');
    // start
    processingModal.modal('show');

    $('#fileUpdate').submit();

    // end
    processingModal.modal('hide');
}

function uploadFile(fileInputId, formId) {
    if (!document.getElementById(fileInputId).value) {
        return;
    }

    var processingModal = angular.element('#processingModal');
    // start
    processingModal.modal('show');

    document.getElementById(formId).submit();

    // end
    processingModal.modal('hide');
}

function searchAll(text) {
    var $window = $window || window;

    if (!text) {
        text = '';
    }

    $window.location.href = getLocalizedUrl('/search/') + encodeURIComponent(text);
};

function onSearchBoxKeyDown(event) {
    var target = null;

    event = event || window.event;

    target = event.srcElement || event.target;

    if (event.keyCode == 13) {
        searchAll(target.value);
    }
}

var mapScriptLoaded = false;

function onMapScriptLoaded() {
    mapScriptLoaded = true;
}

function showMap(x, y, mapId, options) {
    var interval = setInterval(function () {
        if (mapScriptLoaded) {
            var loc = new Microsoft.Maps.Location(x, y);

            var mapOptions = {
                credentials: "ApBF9KP5DD8L3UjbyLBwYdiROIElqUyjnLRpuH2gjCGpLMv_o7nKzssG4Ev0xoKg",
                center: loc,
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                zoom: 10,
                showScalebar: false,
                showDashboard: false,
                disableUserInput: true,
                enableSearchLogo: false
            }

            if (options) {
                mapOptions.zoom = options.zoom;
                mapOptions.disableUserInput = options.disableUserInput;
            }

            var map = new Microsoft.Maps.Map(document.getElementById(mapId), mapOptions);

            // Add a pin to the map
            var pinOptions = {};
            if (options && options.pinOptions) {
                pinOptions.htmlContent = "<div><div style='width: 240px;height: 100px;background-color: white;color: black;padding: 5px;5px;overflow: hidden;text-overflow: ellipsis;'><img src='{{url}}' style='width: 90px;height: 90px;float: left;padding-right: 5px'/><span>{{address}}</span></div><span class='glyphicon glyphicon-triangle-bottom' style='color: white;font-size: 30px;line-height: 15px;padding-left: 170px'></span></div>"
                pinOptions.htmlContent = pinOptions.htmlContent.replace('{{url}}', options.pinOptions.logo).replace('{{address}}', options.pinOptions.address);

                pinOptions.anchor = new Microsoft.Maps.Point(170, 120);

            }

            var pin = new Microsoft.Maps.Pushpin(loc, pinOptions);
            map.entities.push(pin);

            clearInterval(interval);
        }
    }, 100);
}

function drawPieChart(id, containerId, data) {
    // Get context with jQuery - using jQuery's .get() method.
    var ctx = $(id).get(0).getContext("2d");

    var pieChart = new Chart(ctx).Pie(data, {
        'animationSteps': 100,
        'responsive': false,
        'showTooltips': false,
        'legendTemplate': "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    });

    var legend = pieChart.generateLegend();
    $(containerId).append(legend);
}

function drawBarChart(id, data) {
    // Get context with jQuery - using jQuery's .get() method.
    var ctx = $(id).get(0).getContext("2d");

    var barChart = new Chart(ctx).HorizontalBar(data, {
        'animationSteps': 100,
        'responsive': false,
        'barShowStroke': false,
        'showScale': false,
        'showTooltips': false,
        'barDatasetSpacing': -30,
        'barValueSpacing': -10
    });

    return barChart;
}


function getPages(pageIndex, pageCount) {
    if (pageCount <= 1) {
        return [];
    }

    var pages = [];
    var maxLength = 10;
    var start = pageIndex < maxLength / 2;
    var end = (pageCount - pageIndex) < maxLength / 2;

    for (var i = 1; i <= pageCount; i++) {
        var distance = i - 1 - pageIndex;

        if ((start && i <= maxLength) || (end && (pageCount - i) < maxLength)) {
            pages.push(i);
        }
        else if (distance >= 0) {
            if (distance < maxLength / 2) {
                pages.push(i);
            }
        }
        else {
            if (distance >= -(maxLength / 2)) {
                pages.push(i);
            }
        }
    }

    return pages;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getCurrentPath() {
    var paths = window.location.pathname.split('/');
    return decodeURIComponent(paths[paths.length - 1]);
}

function showOperationResult(level, message, callback) {
    // TODO: document.body.offsetWidth?
    $('#operationMessage').text(message);
    $('#operationMessageContainer').fadeIn();

    var interval = setInterval(function () {
        $('#operationMessageContainer').fadeOut();
        clearInterval(interval);
        if (callback) {
            callback();
        }
    }, 3500);
}

// for file upload.
function formSubmitCallback(data) {
    if (data.result != 'success') {
        showOperationResult(null, data.message);
    }
    else {
        var targetElement = document.getElementById(data.elementId);
        if (targetElement) {
            for (var property in data.objectInfo) {
                targetElement.setAttribute(property, data.objectInfo[property]);
            }

            targetElement.click();
        }
    }
}

if(typeof trackPageAction == 'undefined') {
    var trackPageAction = function () {};
}

var colorReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

String.prototype.colorHex = function () {
    var that = this;
    if (/^(rgb|RGB)/.test(that)) {
        var aColor = that.replace(/(?:||rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i = 0; i < aColor.length; i++) {
            aColor[i] = aColor[i].replace(/\(|\)/, '');
            var hex = Number(aColor[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = that;
        }
        return strHex;
    } else if (colorReg.test(that)) {
        var aNum = that.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return that;
        } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    } else {
        return that;
    }
};

angular.module('myOfferApp', [
        'ngRoute', 'ngSanitize'
    ])
    .config(function ($httpProvider) {
        var language = getLanguageByUrl();

        if (language) {
            $httpProvider.defaults.headers.common['User-Language'] = language;
        }
    })

    /**
     * home index page
     */
    .controller('adsCtrl', function ($scope) {
        $scope.closeAds = function () {
            $('#ads').css('display', 'none');
        }
    })

    .controller('homeArticleCtrl', function ($scope) {
        function overflow() {
            $('.article-summary').dotdotdot({
                'wrap': 'letter'
            });
        }

        $scope.load = function () {
            overflow();

            $('#articleNavList').find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                overflow();
            });
        };

        $scope.changeCategory = function (selected) {
            $('#articleNavList').children().each(function (index, element) {
                var span = $(element).find('span');

                if (index == selected) {
                    $(span).addClass('active');
                }
                else {
                    $(span).removeClass('active');
                }
            });
        }
    })

    .controller('homeSearchCtrl', function ($scope, $location, $window, $http) {
        var inChange = false;
        var backgrounds = $('.home-header-background');
        var backgroundIndex = Math.floor(Math.random() * backgrounds.length);
        $(backgrounds[backgroundIndex]).css('opacity', 1);
        var interval = setInterval(function () {
            if (inChange) {
                return;
            }

            var next = (backgroundIndex + 1) % backgrounds.length;
            var first = 1;
            var second = 0;

            inChange = true;
            var interval0 = setInterval(function () {
                first -= 0.05;
                second += 0.05;

                if (first <= 0) {
                    first = 0;
                }

                if (second >= 1) {
                    second = 1;
                }

                $(backgrounds[backgroundIndex]).css('opacity', first);
                $(backgrounds[next]).css('opacity', second);
                if (second >= 1) {
                    inChange = false;
                    clearInterval(interval0);
                    backgroundIndex = next;
                }
            }, 100);
        }, 7 * 1000);

        var menuTitles = homeSearch_menuTitles;
        var defaultBgColor = 'Transparent';
        var selectedBgColor = '#C30050';
        var selectedLocation = {
            countryIndex: -1,
            stateIndex: -1,
            cityIndex: -1
        };

        var states = homeSearch_states;
        var cities = homeSearch_cities;

        $scope.country_list = homeSearch_country_list;
        $scope.state_list = homeSearch_state_list;
        $scope.city_list = [];

        $scope.selectedMenuIndex = -1;
        $scope.searchCondition = {
            location: selectedLocation
        }

        $scope.list_mouseenter = function () {
            if ($($window.event.target).css('background-color').colorHex().toUpperCase() == selectedBgColor) return;
            $($window.event.target).css('background-color', '#ED2E7C');
        };

        $scope.list_mouseleave = function () {
            if ($($window.event.target).css('background-color').colorHex().toUpperCase() == selectedBgColor) return;
            $($window.event.target).css('background-color', defaultBgColor);
        };

        // change country, others will be reset. like: selectLocation(1);
        // change state and city, should pass countryIndex. like: selectLocation(1, 2, 3)
        $scope.selectLocation = function (countryIndex, stateIndex, cityIndex) {
            if (selectedLocation.countryIndex != countryIndex) {
                $('#searchLocation .list-search:first li').each(function (index, elem) {
                    if (index == countryIndex) {
                        $(elem).css('background-color', selectedBgColor);
                    } else {
                        $(elem).css('background-color', defaultBgColor);
                    }
                })

                selectedLocation.countryIndex = countryIndex;
                selectedLocation.stateIndex = -1;
                selectedLocation.cityIndex = -1;

                $scope.state_list = states[countryIndex];
                $scope.city_list = [];
            }

            if (stateIndex == undefined || stateIndex < 0) {
                $('#searchLocation .list-search:eq(1) li:gt(0)').css('background-color', defaultBgColor);
                $('#searchLocation .list-search:eq(1) li:first').css('background-color', selectedBgColor);
                selectedLocation.stateIndex = -1;
                $scope.city_list = [];
            } else {
                $('#searchLocation .list-search:eq(1) li').each(function (index, elem) {
                    if (index == stateIndex + 1) {
                        $(elem).css('background-color', selectedBgColor);
                    } else {
                        $(elem).css('background-color', 'Transparent');
                    }
                });
                selectedLocation.stateIndex = stateIndex;
                $scope.city_list = cities[countryIndex][stateIndex];
            }

            if (cityIndex == undefined || cityIndex < 0) {
                $('#searchLocation .list-search:eq(2) li:gt(0)').css('background-color', defaultBgColor);
                $('#searchLocation .list-search:eq(2) li:first').css('background-color', selectedBgColor);
                selectedLocation.cityIndex = -1;
            } else {
                $('#searchLocation .list-search:eq(2) li').each(function (index, elem) {
                    if (index == cityIndex + 1) {
                        $(elem).css('background-color', selectedBgColor);
                    } else {
                        $(elem).css('background-color', defaultBgColor);
                    }
                });
                selectedLocation.cityIndex = cityIndex;
            }
        };

        $scope.hotKeywords = [];

        $http.get('/api/app/hotSearch').success(function (response) {
            $scope.hotKeywords = response;
        })

        $scope.search = function (text) {
            var content = text || $scope.search_text;

            searchAll(content);
        };

        $scope.searchBy = function () {
            $scope.search(buildSearchText());
        };

        function buildSearchText() {
            if (selectedLocation.cityIndex >= 0) {
                return cities[selectedLocation.countryIndex][selectedLocation.stateIndex][selectedLocation.cityIndex];
            } else if (selectedLocation.stateIndex >= 0) {
                return states[selectedLocation.countryIndex][selectedLocation.stateIndex];
            } else {
                return $scope.country_list[selectedLocation.countryIndex];
            }
        }

        var searchDisplayed = false;

        $scope.switchSearch = function (menuIndex) {
            if (searchDisplayed && $scope.selectedMenuIndex == menuIndex) {
                $scope.closeSearch(menuIndex);
            } else {
                $scope.showSearch(menuIndex);
            }
        }

        $scope.showSearch = function (menuIndex) {
            if ($scope.selectedMenuIndex == menuIndex) return;
            $scope.selectedMenuIndex = menuIndex;
            $scope.menuTitle = menuTitles[$scope.selectedMenuIndex];

            angular.element('.header-nav a').each(function (index, instance) {
                if (index == menuIndex) {
                    angular.element(instance).css('background-color', '#2DCCF7');
                } else {
                    angular.element(instance).css('background-color', '');
                }
            });

            angular.element('.select-menu').show();
            angular.element('.select-menu').animate({
                height: '415px',
                marginTop: '0px',
                opacity: '1'
            }, 200, function () {
                $scope.selectLocation(0);
                searchDisplayed = true;
            });
        };

        $scope.closeSearch = function () {
            angular.element('.select-menu').animate({
                height: '0px',
                marginTop: '415px',
                opacity: '0'
            }, 200, function () {
                angular.element(angular.element('.header-nav a')[$scope.selectedMenuIndex]).css('background-color', '');
                $scope.selectedMenuIndex = -1;
                angular.element('.select-menu').hide();
                searchDisplayed = false;
            });
        };
    })

    .controller('homeEvaluationCtrl', function ($scope, $location, $window, $http) {
        $scope.evaluation = {};
        $scope.countries = [];
        $scope.dateList = dateList;
        $scope.gradeList = [];
        $scope.universityScores = universityScores;
        $scope.ieltsScores = getIELTScores();
        $scope.subjectAreas = [];

        $(document).keydown(function (event) {
            if (event.keyCode != 13) {
                return
            }
            var isFocus = $(".my-search").is(":focus");
            if (true == isFocus) {
                $scope.search();
            }
        });

        $scope.evaluate = function (valid) {
            if (valid) {
                myJudgePhone(function(){
                    var querystring = '';
                    for (var property in $scope.evaluation) {
                        var item = $scope.evaluation[property];
                        if (property == 'score') {
                            item = item.value;
                        }

                        querystring += property + '=' + encodeURIComponent(item) + '&';
                    }
                    // $('#homeEvaluationModal').modal('hide');
                    $window.open(getLocalizedUrl('/account/recommendations?') + querystring);
                })
            }
        }

        $scope.submitEvaluate = function (valid) {
            if (valid) {
                var querystring = '';
                for (var property in $scope.evaluation) {
                    var item = $scope.evaluation[property];
                    if (property == 'score') {
                        item = item.value;
                    }

                    querystring += property + '=' + encodeURIComponent(item) + '&';
                }

                $window.open(getLocalizedUrl('/account/recommendations?') + querystring);
                $('#home-evaluate-intro-dialog').fadeOut();
            }
        }

        $scope.search = function (text) {
            var content = text || $scope.search_text;

            searchAll(content);
        };

        $scope.showHomeEvaluationModal = function () {
            $('#homeEvaluationModal').modal('show');
        }

        $scope.init = function () {

            var lang = getLanguageByUrl() || defaultLanguage;

            $http.get('/api/doc/evaluationData').success(function (response) {
                response.subjects.forEach(function (subjectArea) {
                    $scope.subjectAreas.push(subjectArea);
                });

                response.countries.forEach(function (country) {
                    $scope.countries.push(country);
                });

                response.grades.forEach(function (grade) {
                    $scope.gradeList.push(grade);
                });

                $http.get('/api/account/evaluate').success(function (response) {
                    if (response) {
                        for (var property in response) {
                            if (response[property]) {
                                if (property == 'subject' || property == 'apply' || property == 'des_country' || property == 'grade') {
                                    $scope.evaluation[property] = parseInt(response[property]);
                                }
                                else if (property == 'score') {
                                    for (var i = 0; i < $scope.universityScores.length; i++) {
                                        if ($scope.universityScores[i].value == response[property]) {
                                            $scope.evaluation[property] = $scope.universityScores[i];
                                            break;
                                        }
                                    }
                                }
                                else if (property == 'ielts_avg' || property == 'ielts_low') {
                                    $scope.evaluation[property] = parseFloat(response[property]);
                                }
                                else {
                                    $scope.evaluation[property] = response[property];
                                }
                            }
                        }
                    }
                })
            })

            // init autocomplete plugin
            // $http.get('/docs/' + lang + '/culist.json').success(function (response) {
            //     $('#university').typeahead({
            //         'source': response
            //     });
            // })
        }

    })

    .controller('homeFeedbackCtrl', function ($scope, $window) {
        $scope.load = function () {
            $('.home-feedback').find('div[data-feedback]').each(function (index, item) {
                var id = $(item).attr('data-feedback');

                var sub = $($(item).find('#' + id)[0]);
                var maxHeight = parseInt(sub.attr('data-maxHeight'));
                var minHeight = parseInt(sub.attr('data-minHeight'));

                var cover = $(item).find('.cover');
                // cover.css('height', minHeight);

                $(item).mouseleave(function (e) {
                    if (sub.height() == maxHeight) {
                        sub.animate({height: minHeight + 'px'}, 300);
                        cover.animate({height: 0 + 'px'}, 300);
                    }
                });

                $(item).mouseover(function (e) {
                    if (sub.height() == minHeight) {
                        sub.animate({height: maxHeight + 'px'}, 300);
                        cover.animate({height: '100%'}, 300);
                    }
                })
            })
        }
    })

    .controller('homePartnersCtrl', function ($scope) {
        $scope.load = function () {
            $('.partner-logo-container').find('div').each(function (index, item) {
                var spans = $(item).find('div.partnerwrap');

                var normal = $(spans[0]).find('img');
                var highlight = $(spans[1]).find('img');

                // show the normal one by default.
                highlight.hide();

                $(item).mouseleave(function (e) {
                    highlight.hide();
                    normal.show();
                });

                $(item).mouseover(function (e) {
                    normal.hide();
                    highlight.show();
                });
            });
        }
    })

    .controller('partnershipCtrl', function ($scope, $http) {
        $scope.load = function () {
            $scope.countries = countries;
            $scope.corporations = partnership_corporations;
        }

        $scope.contactUs = function () {
            $scope.error0=false;
            $scope.error1=false;
            $scope.error2=false;
            $scope.error3=false;
            $scope.error4=false;
            $scope.error5=false;
            $scope.error6=false;
            $scope.error7=false;
            if (!$scope.name) {
                $scope.error0 = partnership_errors[0];
                console.log($scope.error0);
                return;
            }
            if (!$scope.country) {
                $scope.error1 = partnership_errors[2];
                return;
            }
            if (!$scope.city) {
                $scope.error2 = partnership_errors[5];
                return;
            }
            if (!$scope.industry) {
                $scope.error3 = partnership_errors[4];
                return;
            }
            if (!$scope.corporation) {
                $scope.error4 = partnership_errors[6];
                return;
            }
            if (!$scope.phone) {
                $scope.error5 = partnership_errors[3];
                return;
            }
            if (!$scope.email) {
                $scope.error6 = partnership_errors[7];
                return;
            }
            $http.post('/api/contactus', {
                'name': $scope.name,
                'country': $scope.country,
                'phone': $scope.phone,
                'industry': $scope.industry,
                'city': $scope.city,
                'corporation': $scope.corporation,
                'email': $scope.email,
                'content': $scope.content
            }).success(function () {
                alert(partnership_success);
                window.location.href='/';
            });
        }
    })

    .controller('articleCtrl', function ($window, $scope, $http) {
        var words = $window.location.pathname.split('/');

        $scope.like = function (id) {
            $http.get('/api/article/' + id + '/like').success(function (response) {
                var text = $('.like-count span').text();
                if(text == response.count) {
                    alert('已经点过赞了哦');
                    return
                }
                $('.like-count span').text(response.count);
                alert('点赞成功');
            });
        }

        $scope.showLogin = function (action) {
            if (action) {
                trackPageAction(action);
            }

            myModalShow('#my-login-modal');
        }

        $scope.showEvaluate = function(action) {
            if (action) {
                trackPageAction(action);
            }

            myModalShow('#my-evaluate-modal');
        }

        $scope.addToCart = function (id) {
            if($('#'+id).hasClass('disabled')) {
                return
            }

            $http.post('/api/account/apply/', {
                'uid': id
            }).success(function (response) {
                myTips('加入成功',true);
                $('#'+ id).text('已加入申请');
                $('#' + id).addClass('disabled');
            });
        }
    })

    .controller('joinusnewCtrl',function ($scope){
        $(window).scroll(function(){
            var top = $(window).scrollTop();
            var $mynav=$(".my-usercenter-wrap");
            if(top > 250 && !$mynav.hasClass('scrolltop-active')) {
                $mynav.addClass("scrolltop-active");
            } else if(top < 250 && $mynav.hasClass('scrolltop-active')) {
                $mynav.removeClass("scrolltop-active");
            }
        })
    })
    .controller('rankCtrl',function($window, $scope, $http){
        $scope.showLogin = function () {
            myModalShow('#my-login-modal');
        }


        $scope.showEvaluate = function(action) {
            if (action) {
                trackPageAction(action);
            }

            myModalShow('#my-evaluate-modal');
        }
    })
    .controller('joinusCtrl', function ($scope) {
        $scope.load = function () {
            $('.major-event').each(function (index, item) {
                var sub = $($(item).find('div')[0]);
                var text = $(sub.find('p')[0]);

                var maxHeight = 100;
                var minHeight = 30;
                if (sub.attr('data-maxHeight')) {
                    maxHeight = parseInt(sub.attr('data-maxHeight'));
                }

                $(item).mouseleave(function (e) {
                    if (sub.height() == maxHeight) {
                        sub.animate({height: minHeight + 'px'}, function () {
                            text.css('color', 'transparent');
                        });
                    }
                });

                $(item).mouseover(function (e) {
                    if (sub.height() == minHeight) {
                        text.css('color', 'white');
                        sub.animate({height: maxHeight + 'px'});
                    }
                })
            })
        }
    })

    .controller('faqCtrl', function ($scope, $window, $http) {
        $scope.load = function () {
            var match = location.hash.match(/[#|&]index=(.+?)(&|$)/);
            var index = parseInt(match ? match[1] : 0);

            $scope.active = index;
        };

        $scope.changeMenu = function(menuIndex) {
            if($scope.active == menuIndex) {
                return
            }
            $scope.active = menuIndex;
            $(".my-left-menu").addClass("left-menu-nofx").css("top", 0);
            $(window).unbind("scroll.menuScroll");
            document.body.scrollTop=0;
            setTimeout(bindScroll, 50)
        };

        function bindScroll(){
            $(window).bind("scroll.menuScroll", function(event){
                var scrollTop = document.body.scrollTop;
                $(".my-left-menu").removeClass("left-menu-nofx");
                $(".my-left-menu").css({"top": scrollTop +"px"});
            });
        };
        bindScroll();
    })

    .controller('aboutusnewCtrl',function($scope,$http){
        $(window).scroll(function(){
            var top = $(window).scrollTop();
            var $mynav=$(".my-usercenter-wrap");
            if(top > 250 && !$mynav.hasClass('scrolltop-active')) {
                $mynav.addClass("scrolltop-active");
            } else if(top < 250 && $mynav.hasClass('scrolltop-active')) {
                $mynav.removeClass("scrolltop-active");
            }
        })
        var $ul=$('#us-slider-ul');
        var liLength=$('#us-slider-ul').find("li").length;
        var currentPage=0;
        $("#arrow-left").click(function(){
            --currentPage;
            if(currentPage<0){
                currentPage=4;
            }
            if((currentPage * 5 + 5) >liLength) {
                animate(liLength - 5);
                return
            }
            animate((currentPage * 5));
        })
        $("#arrow-right").click(function(){
            ++currentPage;
            if(currentPage>4){
                currentPage=0;
            }
            if((currentPage* 5 + 5) > liLength) {
                animate(liLength - 5);
                return
            }
            animate((currentPage * 5));
        })

        function animate(item){
            $ul.css({
                "transform":"translate(-"+(item * 234)+"px,0)",
                "-ms-transform":"translate(-"+(item * 234)+"px,0)",
                "-moz-transform":"translate(-"+(item * 234)+"px,0)",
                "-webkit-transform":"translate(-"+(item * 234)+"px,0)",
                "transition-duration": "300ms",
                "-ms-transition-duration": "300ms",
                "-moz-transition-duration": "300ms",
                "-webkit-transition-duration": "300ms",
                "-o-transition-duration": "300ms"
            })
        }
    })
    .controller('mediaReportsCtrl', function ($scope, $http) {
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            var $mynav=$(".my-usercenter-wrap");
            if(top>250 && !$mynav.hasClass('scrolltop-active')){
                $mynav.addClass("scrolltop-active");
            }else if(top<250 && $mynav.hasClass('scrolltop-active')){
                $mynav.removeClass("scrolltop-active");
        }
        })

        $scope.reportList = [];
        var page=0;
        var pageSize=4;
        var totalList= [];

        function init (){
            $http.get('/docs/zh-cn/media-reports.json').success(function(data){
               if(data && data.length){
                   totalList=data;
                   $scope.btnText="加载更多";
                   $scope.order="-date";
                   $scope.nextPage();
               }
            });
        }

        init();

        $scope.nextPage=function(){
            var start= page*pageSize;
            var end=(++page)*pageSize;
            if(start>totalList.length-1){
                return;
            }else if(end>totalList.length-1){
                end=totalList.length;
                if(end==start){
                    return;
                }
                $scope.btnText="到最后啦！";
                $('.reports-more').attr("disabled","disabled");
                var currentItem=totalList.slice(start,end);
                $scope.reportList=$scope.reportList.concat(currentItem);
            }else{
                var currentItem = totalList.slice(start,end);
                $scope.reportList=$scope.reportList.concat(currentItem);

            }
        }

    })
    .controller('aboutusCtrl', function ($scope, $http) {
        var target = 'China';

        $scope.typeOptions = aboutus_typeOptions;

        $scope.sendMessage = function () {
            if (!$scope.type) {
                $scope.error = aboutus_errors[0];
                return;
            }

            if (!$scope.email) {
                $scope.error = aboutus_errors[1];
                return;
            }

            if (!$scope.full_name) {
                $scope.error = aboutus_errors[2];
                return;
            }

            if (!$scope.content) {
                $scope.error = aboutus_errors[3];
                return;
            }

            $scope.error = null;

            $http.post('/api/message', {
                source: 'aboutus',
                target: target,
                type: $scope.type,
                email: $scope.email,
                full_name: $scope.full_name,
                content: $scope.content
            }).success(function () {
                showOperationResult(null, aboutus_success);
            });
        };

        $scope.load = function () {
            $('.partner-logo-container').find('div').each(function (index, item) {
                var spans = $(item).find('div.partnerwrap');

                var normal = $(spans[0]).find('img');
                var highlight = $(spans[1]).find('img');

                // show the normal one by default.
                highlight.hide();

                $(item).mouseleave(function (e) {
                    highlight.hide();
                    normal.show();
                });

                $(item).mouseover(function (e) {
                    normal.hide();
                    highlight.show();
                });
            });

            var contact_us_containers = $('.contact-us-container');

            var contact_0 = $(contact_us_containers[0]);
            var contact_1 = $(contact_us_containers[1]);
            var contact_2 = $(contact_us_containers[2]);

            contact_0.css('background-color', '#2dccf7');
            contact_1.css('background-color', '#cccccc');
            contact_2.css('background-color', '#cccccc');

            contact_0.click(function () {
                target = 'China'
                contact_0.css('background-color', '#2dccf7');
                contact_1.css('background-color', '#cccccc');
                contact_2.css('background-color', '#cccccc');
            });

            contact_1.click(function () {
                target = 'China'
                contact_1.css('background-color', '#2dccf7');
                contact_0.css('background-color', '#cccccc');
                contact_2.css('background-color', '#cccccc');
            });

            contact_2.click(function () {
                target = 'UK'
                contact_2.css('background-color', '#2dccf7');
                contact_0.css('background-color', '#cccccc');
                contact_1.css('background-color', '#cccccc');
            });
        }
    })


    .controller('searchResultCtrl', function ($scope, $window, $http) {
        function getSearchText ()
        {
            return $('#searchTextHidden').val();
        }

        var rankRange = {};

        $scope.search_text = getSearchText();
        $scope.search_words = [];
        $scope.search_text.split(' ').forEach(function (searchItem) {
            if (searchItem) {
                if (searchItem.indexOf(':') != -1) {
                    var name = searchItem.split(':')[0].toLowerCase();
                    var value = searchItem.split(':')[1];

                    if (name == 'subject') {

                    } else if (name == 'course') {

                    } else {
                        $scope.search_words.push(searchItem);
                    }
                } else {
                    $scope.search_words.push(searchItem);
                }
            }
        });

        $scope.enableFilter = false;

        $scope.load = function (login) {
            var searchText = getSearchText();

            var initFilter = [];
            angular.forEach(window.location.search.split('&'), function (keyValuePair) {
                var words = keyValuePair.split('=');

                if (words[0] == 'area' || words[0] == '?area') {
                    initFilter.push({
                        'name': 'area',
                        'description': areaDescription,
                        'value': decodeURI(words[1])
                    });
                }
            });

            document.getElementById('headerSearchBox').value = (searchText === 'all_uni') ? '' : searchText;
            $scope.search(0, initFilter);

            $("#rankSlider").slider({
                animate: true,
                max: 100,
                min: 1,
                range: true,
                values: [1, 100],
                change: function (event, ui) {
                    $scope.search(0, $scope.appliedFilters);
                },

                slide: function (event, ui) {
                    rankRange.min = ui.values[0];

                    $('#rankLeftIndicator').text(ui.values[0]);

                    if (ui.values[1] == 100) {
                        $('#rankRightIndicator').text('100+');
                        delete rankRange.max;
                    }
                    else {
                        $('#rankRightIndicator').text(ui.values[1]);
                        rankRange.max = ui.values[1];
                    }
                }
            });

            if (login) {
                $http.get('/api/university/recommendations?size=small').success(function (response) {
                    $scope.recommendations = response.recommendations || response;
                });
            }
        }

        function resetRankSlider() {
            rankRange = {};
            $("#rankSlider").slider("values", 0, 0);
            $("#rankSlider").slider("values", 1, 100);
            $('#rankLeftIndicator').text('1');
            $('#rankRightIndicator').text('100+');
        }

        $scope.changeRankType = function () {
            // clear out the selected values.
            resetRankSlider();
            $scope.starOption = {};

            $scope.search(0, $scope.appliedFilters);
        }

        $scope.addToCart = function (course) {
            myJudgePhone(function(){
                $http.post('/api/account/apply/', {
                    'id': course._id
                }).success(function (response) {
                    course.applied = true;
                    showOperationResult(null, cart_success)
                });
            });
        }

        $scope.removeAppliedFilter = function (index) {
            var removedFilter = $scope.appliedFilters.splice(index, 1)[0];
            if (!$scope.removedFilters) {
                $scope.removedFilters = [];
            }

            console.log(removedFilter);

            if (removedFilter.flag == 'suggestion') {
                $scope.removedFilters.push(removedFilter);
            }

            $scope.search(0, $scope.appliedFilters, $scope.removedFilters);
        }

        $scope.jump = function (page) {
            $scope.search(page, $scope.appliedFilters);
        }

        $scope.addFilter = function (filter, value) {
            var filters = [];
            for (var i = 0; i < $scope.appliedFilters.length; i++) {
                filters.push($scope.appliedFilters[i]);
            }

            filters.push({
                'name': filter.name,
                'description': filter.description,
                'value': value
            });

            $scope.search(0, filters);
        }

        $scope.addSubject = function (name) {
            var filter = {};
            var value = name;

            if (name == searchResult_total) {
                filter.name = 'area';
                filter.description = searchResult_descriptions[0];
                value = $scope.areas[$scope.selectedAreaIndex].name;
            }
            else {
                filter.name = 'subject';
                filter.description = searchResult_descriptions[1];
            }

            $scope.addFilter(filter, value);
        }

        $scope.favorite = function (index) {
            if ($scope.universities[index].favorited) {
                $http.get("/api/account/unfavorite/" + $scope.universities[index]._id).success(function (response) {
                    $scope.universities[index].favorited = false;
                });
            }
            else {
                $http.get("/api/account/favorite/" + $scope.universities[index]._id).success(function (response) {
                    $scope.universities[index].favorited = true;
                });
            }
        }

        $scope.showLogin = function () {
            angular.element('#loginModal').modal('show');
        }

        $scope.login = function (isValid) {
            if (isValid) {
                $http.post('/api/account/login', {
                    username: $scope.username,
                    password: $scope.password
                }).success(function (data) {
                    $window.location.reload();
                }).error(function (data) {
                    $scope.error = data.error
                })
            }
        }

        $scope.changeStarOption = function () {
            $scope.search(0, $scope.appliedFilters);
        }

        $scope.search = function (pageIndex, filters, removedFilters) {
            $scope.loaded = false;

            var postData = {
                text: $scope.search_text,
                page: pageIndex,
                filters: filters,
                rankType: $scope.rankType,
                rankRange: rankRange,
                removedFilters: removedFilters,
                size: 20
            };

            if ($scope.starOption && $scope.starOption.value) {
                postData.starOption = $scope.starOption.value;
            }

            $http.post("/api/app/search", postData).success(function (response) {
                $scope.loaded = true;

                $scope.universities = response.universities;
                $scope.rankTypes = response.rankTypes;
                if (response.rankType) {
                    $scope.rankType = response.rankType;
                }

                if (!$scope.rankType) {
                    $scope.rankType = $scope.rankTypes[0];
                }

                $scope.filters = response.filters;
                $scope.count = response.count;
                $scope.appliedFilters = response.appliedFilters;
                $scope.pageIndex = parseInt(response.pageIndex, 10);
                $scope.pageCount = response.pageCount;

                $scope.pages = getPages($scope.pageIndex, $scope.pageCount);

                // reset the star options.
                $scope.starOptions = [{
                    'name': searchResult_starNames[0],
                    'value': 1
                }, {
                    'name': searchResult_starNames[1],
                    'value': 2
                }, {
                    'name': searchResult_starNames[2],
                    'value': 3
                }, {
                    'name': searchResult_starNames[3],
                    'value': 4
                }, {
                    'name': searchResult_starNames[4],
                    'value': 5
                }];

                for (var i = 0; i < $scope.starOptions.length; i++) {
                    if ($scope.starOption) {
                        if ($scope.starOption.value == $scope.starOptions[i].value) {
                            $scope.starOption = $scope.starOptions[i];
                            break;
                        }
                    }
                }

                var starRank = false;
                if ($scope.rankType == searchResult_rankType_local) {
                    for (var i = 0; i < $scope.appliedFilters.length; i++) {
                        if ($scope.appliedFilters[i].name == 'country' && $scope.appliedFilters[i].value == searchResult_country_aus) {
                            starRank = true;
                            break;
                        }
                    }
                }

                if (starRank) {
                    $('#rankSliderContainer').hide();
                    $('#starSelectorContainer').show();
                }
                else {
                    $('#rankSliderContainer').show();
                    $('#starSelectorContainer').hide();
                }

                for (var i = 0; i < $scope.universities.length; i++) {
                    if ($scope.rankType == searchResult_rankType_local) {
                        $scope.universities[i].ranking = $scope.universities[i].ranking_ti;
                        if ($scope.universities[i].country == searchResult_country_aus) {
                            if ($scope.universities[i].ranking != 99999) {
                                var tmp = [];
                                for (var star = 0; star < $scope.universities[i].ranking; star++) {
                                    tmp.push(star);
                                }

                                $scope.universities[i].ranking = tmp;
                            }
                        }
                    }
                    else {
                        $scope.universities[i].ranking = $scope.universities[i].ranking_qs;
                    }

                    if ($scope.universities[i].key_subjectArea) {
                        var small_key_areas = [];

                        for (var j = 0; j < $scope.universities[i].key_subjectArea.length; j++) {
                            if (small_key_areas.length < 5) {
                                small_key_areas.push($scope.universities[i].key_subjectArea[j]);
                            }
                            else {
                                break;
                            }
                        }

                        $scope.universities[i].key_subjectArea = small_key_areas;
                    }


                    if ($scope.universities[i].courses) {
                        angular.forEach($scope.universities[i].courses, function (course) {
                            // highlight the course name.
                            var official_name = course.official_name;
                            angular.forEach($scope.search_words, function (word) {
                                var pattern = new RegExp('(' + word + ')', 'gi');
                                official_name = official_name.replace(pattern, '{$1}');
                            });

                            var pattern = new RegExp('{', 'gi');
                            official_name = official_name.replace(pattern, '<span class="course-highlight">');
                            pattern = new RegExp('}', 'gi');
                            course.highlight_official_name = official_name.replace(pattern, '</span>');

                            // highlight area and subject.
                            var matchedFields = {};
                            for (var j = 0; j < course.areas.length; j++) {
                                for (var k = 0; k < $scope.search_words.length; k++) {
                                    if (course.areas[j] == $scope.search_words[k]) {
                                        if (!matchedFields[searchResult_descriptions[0]]) {
                                            matchedFields[searchResult_descriptions[0]] = {};
                                        }

                                        matchedFields[searchResult_descriptions[0]][course.areas[j]] = true;
                                    }
                                }

                                for (var k = 0; k < $scope.appliedFilters.length; k++) {
                                    if ($scope.appliedFilters[k].name == 'area' && course.areas[j] == $scope.appliedFilters[k].value) {
                                        if (!matchedFields[searchResult_descriptions[0]]) {
                                            matchedFields[searchResult_descriptions[0]] = {};
                                        }

                                        matchedFields[searchResult_descriptions[0]][course.areas[j]] = true;
                                    }
                                }
                            }

                            if (course.subjects) {
                                for (var j = 0; j < course.subjects.length; j++) {
                                    for (var k = 0; k < $scope.search_words.length; k++) {
                                        if (course.subjects[j] == $scope.search_words[k]) {
                                            if (!matchedFields[searchResult_descriptions[1]]) {
                                                matchedFields[searchResult_descriptions[1]] = {};
                                            }

                                            matchedFields[searchResult_descriptions[1]][course.subjects[j]] = true;
                                        }
                                    }

                                    for (var k = 0; k < $scope.appliedFilters.length; k++) {
                                        if ($scope.appliedFilters[k].name == 'subject' && course.subjects[j] == $scope.appliedFilters[k].value) {
                                            if (!matchedFields[searchResult_descriptions[1]]) {
                                                matchedFields[searchResult_descriptions[1]] = {};
                                            }

                                            matchedFields[searchResult_descriptions[1]][course.subjects[j]] = true;
                                        }
                                    }
                                }
                            }

                            var fields = [];
                            for (var field in matchedFields) {
                                var values = '';
                                for (var value in matchedFields[field]) {
                                    values += value + ' ';
                                }

                                fields.push({'name': field, 'value': values});
                            }

                            if (fields.length > 0) {
                                course.matched_fields = fields;
                            }
                        });
                    }
                }

                if ($scope.areas && $scope.appliedFilters) {
                    angular.forEach($scope.areas, function (area, index) {
                        for (var i = 0; i < area.subjects.length; i++) {
                            area.subjects[i].selected = false;

                            for (var j = 0; j < $scope.appliedFilters.length; j++) {
                                if ($scope.appliedFilters[j].name == 'subject' && area.subjects[i].name == $scope.appliedFilters[j].value) {
                                    area.subjects[i].selected = true;
                                    if ($scope.selectedAreaIndex == -1) {
                                        $scope.selectedAreaIndex = index;
                                    }
                                }
                                else if ($scope.appliedFilters[j].name == 'area' && area.name == $scope.appliedFilters[j].value && area.subjects[i].name == searchResult_total) {
                                    area.subjects[i].selected = true;
                                    $scope.selectedAreaIndex = index;
                                }
                            }
                        }
                    });
                }
            }).error(function (err) {
                console.log(err);
            });
        }

        var lang = getLanguageByUrl() || defaultLanguage;
        $http.get('/docs/' + lang + '/subjects.json').success(function (response) {
            var areas = response;
            angular.forEach(areas, function (area) {
                area.subjects.unshift({'name': searchResult_total});
            });

            $scope.areas = areas;
        });

        $scope.selectedAreaIndex = -1;
        $scope.areaChange = function ($index) {
            $scope.selectedAreaIndex = $index;
        }

        $scope.evaluation = {};

        $scope.showHomeEvalModal = function () {
            $('#homeEvaluationModal').modal('show');
        }

        var smartSearchHeight;
        var smartSearchWidth;
        $scope.collapse = function (show) {
            if (show) {
                $('#smartSearchBtn').css('display', 'none');

                $('#smartSearch').css('display', 'block');
                $('#smartSearch').animate({'height': smartSearchHeight, 'width': smartSearchWidth, 'opacity': 1});
            }
            else {
                smartSearchHeight = $('#smartSearch').height();
                smartSearchWidth = $('#smartSearch').width();
                $('#smartSearch').animate({'height': '0px', 'width': '0px', 'opacity': 0}, function () {
                    $('#smartSearch').css('display', 'none');
                });

                $('#smartSearchBtn').css('display', 'inline-block');
            }
        }
    })

    .controller('universityCtrl', function ($scope, $window, $http) {
        var successRateBarChart = null;
        var bar_data = null;
        var bar_data_update = null;
        var barCollapsed = false;

        $scope.evaluation = {};
        $scope.courses = [];
        $scope.levels = university_levels;
        $scope.selectedArea = university_total;
        $scope.selectedLevel = university_total;
        $scope.curTab = 0;
        $scope.selectedCourses = {};
        $scope.selectedCoursesCount = 0;
        $scope.course_search_text = null;
        $scope.commentContent = "";
        $scope.commentScores = [[1, 1, 1, 0, 0], [1, 1, 1, 0, 0], [1, 1, 1, 0, 0], [1, 1, 1, 0, 0], [1, 1, 1, 0, 0], [1, 1, 1, 0, 0], [1, 1, 1, 0, 0], [1, 1, 1, 0, 0]];
        $scope.scoreTypes = university_scoreTypes;
        $scope.pageSize = 5;
        $scope.currentPageIndex = 0;
        $scope.commentList = [];
        $scope.startComment = false;

        $scope.changeTab = function (index) {
            $scope.curTab = index;
        }

        $scope.goToCourse = function (hot_course) {
            if (hot_course) {
                $scope.course_search_text = hot_course.name;
                onCoursesLoad([hot_course], 1, 0, 1);
            }

            $window.location.hash = '#subjectSummaryLink';
            angular.element('#subjectSummaryLink').click();
            $scope.changeTab(1);
        }

        if (window.location.hash == '#subject') {
            $scope.goToCourse(null);
        }

        function loadEvaluationData() {
            if ($scope.university.evaluation == -1) {
                $http.get('/api/account/evaluate/' + $scope.university._id).success(function (evaluationResult) {
                    if (evaluationResult[$scope.university._id]) {
                        $scope.university.evaluation = evaluationResult[$scope.university._id];

                        bar_data_update = $scope.university.evaluation;
                    }
                });
            }
        }

        var onCoursesLoad = function (courses, count, pageIndex, pageCount) {
            $scope.courses = courses;
            $scope.count = count;
            $scope.pageIndex = parseInt(pageIndex, 10);
            $scope.pageCount = pageCount;

            $scope.pages = getPages($scope.pageIndex, $scope.pageCount);

            // set the selected property.
            for (var i = 0; i < $scope.courses.length; i++) {
                if ($scope.selectedCourses[$scope.courses[i]._id]) {
                    $scope.courses[i].selected = true;
                }
            }
        }

        var getCourses = function (pageIndex, show) {
            var area = $scope.selectedArea == university_total ? null : $scope.selectedArea;
            var level = $scope.selectedLevel == university_total ? null : $scope.selectedLevel;

            var url = '/api/university/' + $scope.university._id + '/courses';

            if (area || level || pageIndex || $scope.course_search_text) {
                url += '?'

                if (area) {
                    url += 'area=' + area + '&';
                }

                if (level) {
                    url += 'level=' + level + '&';
                }

                if (pageIndex) {
                    url += 'page=' + pageIndex + '&';
                }

                if ($scope.course_search_text) {
                    url += 'text=' + encodeURIComponent($scope.course_search_text);
                }
            }

            $http.get(url)
                .success(function (response) {
                    onCoursesLoad(response.courses, response.count, response.pageIndex, response.pageCount);
                });
        }

        $scope.load = function (data) {
            $scope.university = data;

            // show maps
            if ($scope.university.map_location) {
                var locations = $scope.university.map_location.split(',');
                showMap(locations[0], locations[1], 'universityMap');
                showMap(locations[0], locations[1], 'bigUniversityMap',
                    {
                        'pinOptions': {'logo': $scope.university.logo, 'address': $scope.university.address},
                        'zoom': 14,
                        'disableUserInput': false
                    });
            }

            // draw the student distribution pie chart.
            var data = [
                {
                    value: $scope.university.local_student_count,
                    color: "deepskyblue",
                    label: university_pieLabels[0]
                },

                {
                    value: $scope.university.international_student_count,
                    color: "darkorange",
                    label: university_pieLabels[1]
                }
            ];
            drawPieChart('#studentDisChart', '#studentDisChartContainer', data);

            // draw the success bar chart.
            var evaluation = $scope.university.evaluation ? $scope.university.evaluation : 0;
            bar_data = {
                labels: [university_barLabels[0]],
                datasets: [
                    {
                        label: university_barLabels[1],
                        fillColor: "deepskyblue",
                        data: [$scope.university.success_rate]
                    },
                    {
                        label: university_barLabels[2],
                        fillColor: "darkorange",
                        data: [evaluation]
                    }
                ]
            };

            if (!barCollapsed) {
                drawBarChart('#successRateChart', bar_data);
            }

            getCourses(0);
            loadEvaluationData();

            function getElementTop(element) {
                var actualTop = element.offsetTop;
                var current = element.offsetParent;

                while (current !== null) {
                    actualTop += current.offsetTop;
                    current = current.offsetParent;
                }

                return actualTop;
            }

            function getElementLeft(element) {
                var actualLeft = element.offsetLeft;
                var current = element.offsetParent;

                while (current !== null) {
                    actualLeft += current.offsetLeft;
                    current = current.offsetParent;
                }

                return actualLeft;
            }

            var fastApplyElement = document.getElementById('fastApply');
            var fastApplyTop = getElementTop(fastApplyElement);
            var fastApplyWidth = $(fastApplyElement).outerWidth();

            var mySuccessRateElement = document.getElementById('mySuccessRate');
            var mySuccessRateTop = getElementTop(mySuccessRateElement);
            var mySuccessRateWidth = mySuccessRateElement.scrollWidth;

            var universityNavBarElement = document.getElementById('universityNavBar');
            var universityNavBarTop = getElementTop(universityNavBarElement);
            var universityNavBarHeight = 44;

            var fixedAdsElement = document.getElementById('fixedAds');
            var fixedAdsTop = getElementTop(fixedAdsElement);
            var fixedAdsWidth = fixedAdsElement.scrollWidth;

            var headerHeight = 75;
            var margin = 15;

            var fixed = false;

            $window.onresize = function () {
                var container = document.getElementById('universityMainContainer');
                var left = getElementLeft(container) + $(container).width() * 0.75 + 22;

                $('#fixedContainer').css('left', left);
            };

            $window.onscroll = function () {
                var container = document.getElementById('universityMainContainer');
                var left = getElementLeft(container) + $(container).width() * 0.75 + 22;

                var scrollTop = $(window).scrollTop() + headerHeight;
                if (scrollTop <= universityNavBarTop) {
                    $('#universityNavBar').removeAttr("style");
                    $('#fixedContainer').css('top', $('#fixedContainer').position().top - universityNavBarHeight);
                }

                if (scrollTop > fastApplyTop) {
                    $('#fixedContainer').css('display', 'block');
                    $('#fixedContainer').css('top', headerHeight);
                    $('#fixedContainer').css('left', left);
                    $('#fastApply').css('width', fastApplyWidth).css('position', 'relative').css('left', '0').css('clear', 'both');
                    $('#fixedContainer').append($('#fastApply'));
                    fixed = true;
                }
                else {
                    $('#fixedContainer').removeAttr("style");
                    $('#fastApply').removeAttr("style");
                    $('#fastApplyContainer').append($('#fastApply'));
                    fixed = false;
                }

                if (scrollTop + $('#fixedContainer').outerHeight(true) > mySuccessRateTop && fixed) {
                    $('#successRateContainer').css('display', 'none');
                    $('#successRateSmallContainer').css('display', 'block');
                    $('#mySuccessRate').css('width', mySuccessRateWidth).css('margin-top', margin).css('clear', 'both');
                    $('#fixedContainer').append($('#mySuccessRate'));
                    barCollapsed = true;
                }
                else {
                    $('#mySuccessRate').removeAttr("style");
                    $('#mySuccessRateContainer').append($('#mySuccessRate'));
                    $('#successRateContainer').css('display', 'block');
                    $('#successRateSmallContainer').css('display', 'none');

                    if (!successRateBarChart && bar_data) {
                        // draw the bar chart.
                        successRateBarChart = drawBarChart('#successRateChart', bar_data);
                    }
                    if (successRateBarChart && bar_data_update) {
                        // update the bar chart.
                        successRateBarChart.datasets[1].bars[0].value = $scope.university.evaluation;
                        successRateBarChart.update();
                        bar_data_update = false;
                    }

                    barCollapsed = false;
                }

                if (scrollTop + $('#fixedContainer').outerHeight(true) > fixedAdsTop) {
                    $('#fixedAds').css('width', fixedAdsWidth).css('margin-top', margin).css('clear', 'both');
                    $('#fixedContainer').append($('#fixedAds'));
                }
                else {
                    $('#fixedAds').removeAttr("style");
                    $('#fixedAdsContainer').append($('#fixedAds'));
                }

                if (scrollTop > universityNavBarTop) {
                    $('#universityNavBar').css('position', 'fixed').css('top', headerHeight);
                    $('#fixedContainer').css('top', $('#fixedContainer').position().top + universityNavBarHeight);
                }

                // since we have bootstrap tab before the footer, we need to calculate the top for footer here.
                var footerTop = getElementTop(document.getElementById('footer')) - 100;

                // when user refresh the page, we still may get an invalid top...
                if (footerTop < 1000) {
                    footerTop = 4000;
                }

                if (scrollTop + universityNavBarHeight + $('#fixedContainer').outerHeight(true) > footerTop) {
                    $('#fixedContainer').css('z-index', 997).css('position', 'absolute').css('top', footerTop - $('#fixedContainer').outerHeight(true));
                }
                else {
                    $('#fixedContainer').css('position', 'fixed').css('z-index', 999);
                }
            }
            $scope.getScores();
            $scope.getComment(0, $scope.pageSize);
        }

        $scope.searchCourse = function () {
            getCourses(0);
        }

        $scope.onCourseSearchKeyDown = function (event) {
            if (event.keyCode == 13) {
                $scope.searchCourse();
            }
        }

        $scope.onCheckCourse = function (index) {
            if ($scope.courses[index].selected) {
                $scope.selectedCoursesCount++;
                $scope.selectedCourses[$scope.courses[index]._id] = true;
            }
            else {
                $scope.selectedCoursesCount--;
                $scope.selectedCourses[$scope.courses[index]._id] = false;
            }
        }

        $scope.addToCart = function (loggedIn) {
            if (!loggedIn && !$scope.access_token) {
                $scope.loginCallback = $scope.addToCart;
                $scope.showLogin('add2Application');
                return;
            }

            myJudgePhone(function () {
                var courseIds = [];

                for (var courseId in $scope.selectedCourses) {
                    if ($scope.selectedCourses[courseId]) {
                        courseIds.push(courseId);
                    }
                }

                if (courseIds.length > 0) {
                    $http.post('/api/account/apply/', {
                        'id': courseIds
                    }).success(function (response) {
                        for (var i = 0; i < $scope.courses.length; i++) {
                            if ($scope.selectedCourses[$scope.courses[i]._id]) {
                                $scope.courses[i].applied = true;
                            }
                        }

                        $scope.selectedCourses = {};
                        $scope.selectedCoursesCount = 0;

                        showOperationResult(null, cart_success)
                    });
                }
                else {
                    $scope.goToCourse();
                }

            });
        };

        $scope.jump = function (page) {
            getCourses(page);
        };

        $scope.selectArea = function (index) {
            $scope.selectedArea = $scope.areas[index];

            getCourses(0);
        };

        $scope.selectLevel = function (index) {
            $scope.selectedLevel = $scope.levels[index];

            getCourses(0);
        };

        var lang = getLanguageByUrl() || defaultLanguage;
        $http.get('/docs/' + lang + '/subjects.json').success(function (response) {
            $scope.areas = [university_total];
            $scope.subjectOptions = [];
            angular.forEach(response, function (subjectItem) {
                $scope.areas.push(subjectItem.name);
                $scope.subjectOptions.push(subjectItem.name);
            });
        });

        $scope.showLogin = function (action) {
            if (action) {
                trackPageAction(action);
            }

            myModalShow('#my-login-modal');
        };

        $scope.showEvaluate = function() {
            myModalShow('#my-evaluate-modal');
        };

        $scope.login = function (isValid) {
            if (isValid) {
                $http.post('/api/account/login', {
                    username: $scope.username,
                    password: $scope.password
                }).success(function (data) {
                    if ($scope.loginCallback) {
                        angular.element('#loginModal').modal('hide');
                        $scope.access_token = data.access_token;
                        $scope.loginCallback();
                    }
                    else {
                        $window.location.reload();
                    }
                }).error(function (data) {
                    $scope.error = data.error
                })
            }
        }

        $scope.evaluate = function () {
            angular.element('#evaluationModal').modal('show');
        }

        $scope.saveEvaluationData = function () {
            myJudgePhone(function() {
                $http.post('/api/account/evaluate', {
                    'university': $scope.evaluation.university,
                    'subject': $scope.evaluation.subject,
                    'score': $scope.evaluation.score,
                    'ielts_avg': $scope.evaluation.ielts_avg,
                    'ielts_low': $scope.evaluation.ielts_low,
                    'apply': $scope.evaluation.apply
                }).success(function (response) {
                    angular.element('#evaluationModal').modal('hide');
                    $scope.university.evaluation = -1;
                    loadEvaluationData();
                });
            })
        }

        $scope.favorite = function () {
            if ($scope.university.favorited) {
                $http.get("/api/account/unfavorite/" + $scope.university._id).success(function (response) {
                    $scope.university.favorited = false;
                });
            }
            else {
                $http.get("/api/account/favorite/" + $scope.university._id).success(function (response) {
                    $scope.university.favorited = true;
                });
            }
        }

        $scope.getScores = function () {
            $http.get("/api/university/" + $scope.university._id + '/scores').success(function (response) {
                function getStarArray(val) {
                    var result = [];
                    for (var i = 0; i < 5; i++) {
                        result.push(val <= 0 ? 0 : (val >= 2 ? 2 : 1));
                        val -= 2;
                    }
                    return result;
                }

                $scope.scores = response;
                if (!$scope.scores_img) {
                    $scope.scores_img = [];
                }
                if (response.count && response.sum_scores) {
                    var sum = 0;
                    for (var i = 0; i < response.sum_scores.length; i++) {
                        sum += response.sum_scores[i];
                        $scope.scores_img[i] = getStarArray(parseInt(2 * response.sum_scores[i] / response.count));
                    }
                    $scope.commentAvgScore = sum / response.sum_scores.length / response.count;
                    $scope.commentAvgScore_img = getStarArray(parseInt(2 * $scope.commentAvgScore));
                    $scope.maxPageIndex = parseInt((response.count - 1) / $scope.pageSize);
                } else {
                    $scope.commentAvgScore = 0;
                    $scope.commentAvgScore_img = [0, 0, 0, 0, 0];
                    $scope.currentPageIndex = 0;
                    $scope.maxPageIndex = 0;
                    $scope.scores_img = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
                }
            });
        }

        $scope.getComment = function (index, size) {
            if (index < 0) {
                index = 0;
            }

            if (index > $scope.maxPageIndex) {
                index = $scope.maxPageIndex;
            }

            if (size <= 0) {
                size = 5;
            }

            $http.get("/api/university/" + $scope.university._id + "/comment?index=" + index + "&size=" + size).success(function (response) {
                $scope.currentPageIndex = index;
                if (!$scope.commentList) {
                    $scope.commentList = [];
                }
                var lastId = $scope.commentList.length ? $scope.commentList[$scope.commentList.length - 1]._id : null;

                for (var i = 0; i < response.length; i++) {
                    if (lastId == null || response[i]._id < lastId) {
                        $scope.commentList.push(response[i]);
                    }
                }
            });
        }

        $scope.commentLike = function (index, account_id, cancel) {
            if (cancel) {
                $http.post("/api/universityComment/" + $scope.commentList[index]._id + "/like", {cancel: 1}).success(function (response) {
                    var idx = $scope.commentList[index].like_accounts.lastIndexOf(account_id);
                    if (idx >= 0 && idx < $scope.commentList[index].like_accounts.length - 1) {
                        $scope.commentList[index].like_accounts[idx] = $scope.commentList[index].like_accounts.pop();
                    } else {
                        $scope.commentList[index].like_accounts.pop()
                    }
                });
            } else {
                $http.post("/api/universityComment/" + $scope.commentList[index]._id + "/like", null).success(function (response) {
                    $scope.commentList[index].like_accounts.push(account_id);
                });
            }
        };

        $scope.commentCreate = function () {
            var scores = [];
            for (var i = 0; i < $scope.commentScores.length; i++) {
                var sum = 0;
                for (var j = 0; j < $scope.commentScores[i].length; j++) {
                    sum += $scope.commentScores[i][j];
                }
                scores.push(sum);
            }

            $http.put("/api/university/" + getCurrentPath() + "/comment",
                {content: $scope.commentContent, scores: scores.join(",")}).success(function (response) {
                $scope.getScores();
                $scope.commentList = [];
                $scope.getComment(0, $scope.pageSize);
                $scope.startComment = false;
            });
        };

        $scope.setShowAllComments = function () {
            $scope.showAllComments = true;
            $scope.pageSize = 5;
            $scope.getScores();
            $scope.getComment(0, $scope.pageSize);
        }

        $scope.setStartComment = function (val) {
            document.getElementById("div_addUniversityComment").removeAttribute("class");
            document.getElementById("div_UniversityCommentDialogMask").removeAttribute("class");
            $scope.startComment = val;
        }

        $scope.rateStar = function (x, y) {
            for (var j = 0; j < $scope.commentScores[x].length; j++) {
                $scope.commentScores[x][j] = j <= y ? 1 : 0;
            }
        }
    })

    .controller('accountLoginCtrl', function ($scope, $window, $http) {
        $scope.submit = function (isValid) {
            if (isValid) {
                $http.post('/api/account/login', {
                    username: $scope.username,
                    password: $scope.password
                }).success(function (data) {
                    if (data.role == 'partner') {
                        $window.location.href = getLocalizedUrl('/partner/account');
                    } else {
                        $window.location.href = getLocalizedUrl('/');
                    }
                }).error(function (data) {
                    $scope.error = data.error
                })
            }
        }
    })

    .controller('recommendationsCtrl', function ($scope, $window, $http) {
        var query = window.location.search;

        $scope.showLogin = function () {
            angular.element('#loginModal').modal('show');
        }

        $scope.login = function (isValid) {
            if (isValid) {
                $http.post('/api/account/login', {
                    username: $scope.username,
                    password: $scope.password
                }).success(function (data) {
                    $window.location.reload();
                }).error(function (data) {
                    $scope.error = data.error
                })
            }
        }

        $scope.favorite = function (university) {
            if (university.favorited) {
                $http.get("/api/account/unfavorite/" + university._id).success(function (response) {
                    university.favorited = false;
                });
            }
            else {
                $http.get("/api/account/favorite/" + university._id).success(function (response) {
                    university.favorited = true;
                });
            }
        }

        $http.get('/api/university/recommendations' + query).success(function (response) {
            if (response == -1) {
                $scope.recommendations = -1;
            }
            else {
                var rawData = response.recommendations;
                $scope.recommendations = [];
                $scope.descriptions = recommendation_descriptions;
                var tuple_count = 2;
                var university_count = 2;

                if (rawData) {
                    angular.forEach(rawData, function (raw, index) {
                        var group = [];
                        var batch = [];
                        var tuple = [];
                        angular.forEach(raw, function (university) {
                            tuple.push(university);

                            if (tuple.length >= university_count) {
                                batch.push(tuple);
                                tuple = [];
                            }

                            if (batch.length >= tuple_count) {
                                group.push(batch);
                                batch = [];
                            }
                        });
                        if (tuple.length > 0) {
                            batch.push(tuple);
                        }
                        if (batch.length > 0) {
                            group.push(batch);
                        }

                        if (group.length > 0) {
                            $scope.recommendations.push(group);
                        }
                        else {
                            $scope.descriptions.splice(index, 1);
                        }
                    });
                }
            }
        });
    })
    .controller('longinEnrollCtrl', function ($scope, $window, $http, $interval) {
        $scope.init = function () {
            $scope.login_tips = login_tips;
            $scope.mobile_codes = mobile_codes;
            $scope.mobile_code_values = ['86', '44'];
            $scope.mobilecode_index = 0;
            $scope.remember_me = true;
            $scope.vcode = {};

            $scope.forget = {};
            $scope.forgetVcodeStatus = false;
            $scope.forgetSetTime;

            $scope.loginValue = {};

            $scope.phonenumber = null;

            $scope.enrolVerify = [
                {
                    id: 'login-enroll-user',
                    verify: {
                        required: true,
                        minlength: 10,
                        maxlength: 11,
                        blank:true
                    },
                    messages: {
                        required: login_tips[0],
                        minlength: login_tips[1],
                        maxlength: login_tips[2]
                    }
                },
                {
                    id: 'login-enroll-password',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        blank:true
                    },
                    messages: {
                        required: login_tips[3],
                        minlength: login_tips[4],
                        maxlength: login_tips[5]
                    }
                },
                {
                    id: 'login-enroll-password-again',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        blank:true,
                        password: 'login-enroll-password'
                    },
                    messages: {
                        required: login_tips[3],
                        minlength: login_tips[4],
                        maxlength: login_tips[5],
                        password: login_tips[6]
                    }
                },
                {
                    id: 'login-enroll-code',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 6,
                        blank:true
                    },
                    messages: {
                        required: login_tips[7],
                        minlength: login_tips[8],
                        maxlength: login_tips[9]
                    }
                }
            ]

            $scope.loginVerify = [
                {
                    id: 'login-user',
                    verify: {
                        required: true,
                        blank:true
                        // minlength: 10,
                        // maxlength: 11
                    },
                    messages: {
                        required: login_tips[10],
                        minlength: login_tips[1],
                        maxlength: login_tips[2]
                    }
                },
                {
                    id: 'login-password',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        blank:true
                    },
                    messages: {
                        required: login_tips[3],
                        minlength: login_tips[11],
                        maxlength: login_tips[12]
                    }
                }
            ]

            $scope.forgetVerify = [
                {
                    id: 'forget-username',
                    verify: {
                        required: true,
                        blank:true
                    },
                    messages: {

                    }
                },
                {
                    id: 'forget-code',
                    verify: {
                        required: true,
                        blank:true
                    },
                    messages: {

                    }
                },
                {
                    id: 'forget-password',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        blank:true
                    },
                    messages: {

                    }
                },
                {
                    id: 'forget-re-password',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        password: 'forget-password',
                        blank:true
                    },
                    messages: {

                    }
                }
            ];


            myVerifyChange($scope.loginVerify);
            myVerifyChange($scope.enrolVerify);
            myVerifyChange($scope.forgetVerify);

            $(document).keydown(function (event) {
                if (event.keyCode != 13) {
                    return
                }
                var left = parseInt($('.my-tabs div').css('left'));
                if (left == 0) {
                    $scope.submit();
                    return
                }
                $scope.login();
            });
        }

        $scope.changeFormForget = function() {
            if($('#change-form-forget').hasClass('forget')) {
                $('#change-form-forget').removeClass('forget');
                $scope.forget = {};
                myVerifyHide($scope.forgetVerify);
                endCode();
                return
            }
            $('#change-form-forget').addClass('forget');
        }

        $scope.rememberMe = function () {
            $scope.remember_me = !$scope.remember_me;
        }

        $scope.sendVCode = function () {
            if (!myAuthCodeStatus) {
                return
            }

            if (!myVerify([
                    {
                        id: 'login-enroll-user',
                        verify: {
                            required: true,
                            minlength: 10,
                            maxlength: 11,
                            blank:true
                        },
                        messages: {
                            required: login_tips[0],
                            minlength: login_tips[1],
                            maxlength: login_tips[2]
                        }
                    }
                ])) {
                return
            }

            var phonenumber = $('#login-enroll-user').val();

            if (phonenumber[0] == '0') {
                myVerifyShow('login-enroll-user', login_tips[14])
                return;
            }

            myAuthCode('login-auth-code');

            $http.post('/api/vcode/', {
                code_type: 'register',
                phonenumber: $scope.phonenumber,
                mobile_code: $scope.mobile_code_values[$scope.mobilecode_index]
            }).success(function (returnData) {
                $scope.vcode.id = returnData.id
            }).error(function (data) {
                alert('验证码发送失败');
            });
        }

        $scope.sendVCodeForget = function() {
            if($scope.forgetVcodeStatus) {
                return
            }

            var username = [
                    {
                        id: 'forget-username',
                        verify: {
                            required: true
                        }
                    }
                ]
            if(!myVerify(username)){
                return
            }

            var regr = /^[0-9]*$/;
            if (!regr.test($scope.forget.username)) {
                var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                if (!reg.test($scope.forget.username)) {
                    myVerifyShow('forget-username', login_tips[13]);
                    return
                }
            } else {
                if ($scope.forget.username[0] == '0') {
                    myVerifyShow('forget-username', login_tips[14]);
                    return
                }
                else if ($scope.forget.username.length < 10) {
                    myVerifyShow('forget-username', login_tips[1]);
                    return
                }
                else if ($scope.forget.username.length > 11) {
                    myVerifyShow('forget-username', login_tips[2]);
                    return
                }
            }

            $http.post('/api/vcode', {
                'code_type': 'reset',
                'target': $scope.forget.username
            }).success(function (response) {
                $scope.forget.codeId = response.id;
                authCode();
            }).error(function (data) {
                if(data['error'].indexOf("用户") != -1) {
                    myVerifyShow('forget-username',data['error']);
                }
            });
        }

        function authCode() {
            if($scope.forgetVcodeStatus) {
                return
            }
            authCodeReciprocal(60);
            function authCodeReciprocal(code) {
                $scope.forgetVcodeStatus = true;
                $scope.forgetSetTime = setTimeout(function(){
                    var i = code;
                    $('#forget-auth-code').addClass('disabled');
                    $('#forget-auth-code').text(i + "s");
                i--;
                if(i < 0) {
                    $('#forget-auth-code').text('重新发送');
                    $('#forget-auth-code').removeClass('disabled');
                    $scope.forgetVcodeStatus = false;
                    return
                }
                authCodeReciprocal(i);
                },1000);
            }
        }

        function endCode() {
            $scope.forgetVcodeStatus = false;
            $('#forget-auth-code').text('发送验证码');
            $('#forget-auth-code').removeClass('disabled');
            clearTimeout($scope.forgetSetTime);
        }

        $scope.forgetSubmit = function() {
            if(!myVerify($scope.forgetVerify)) {
                return
            };

            var regr = /^[0-9]*$/;
            if (!regr.test($scope.forget.username)) {
                var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                if (!reg.test($scope.forget.username)) {
                    myVerifyShow('forget-username', login_tips[13]);
                    return
                }
            } else {
                if ($scope.forget.username[0] == '0') {
                    myVerifyShow('forget-username', login_tips[14]);
                    return
                }
                else if ($scope.forget.username.length < 10) {
                    myVerifyShow('forget-username', login_tips[1]);
                    return
                }
                else if ($scope.forget.username.length > 11) {
                    myVerifyShow('forget-username', login_tips[2]);
                    return
                }
            }

            $http.post('/api/account/resetpassword', {
                'id': $scope.forget.codeId,
                'vcode': $scope.forget.code,
                'target': $scope.forget.username,
                'new_password': $scope.forget.password,
                'new_repassword': $scope.forget.rePassword
            }).success(function (response) {
                $scope.changeFormForget();
                $scope.forget = {};
            }).error(function (data) {
                if(data['error'].indexOf("验证码") != -1) {
                    myVerifyShow('forget-code',data['error']);
                }
            });
        }

        $scope.submit = function (code, tags) {
            if (!myVerify($scope.enrolVerify)) {
                return
            }

            var phonenumber = $('#login-enroll-user').val();

            if (phonenumber[0] == '0') {
                myVerifyShow('login-enroll-user', login_tips[14])
                return;
            }

            var postData = {
                'username': $scope.phonenumber,
                'password': $scope.password,
                'vcode': {
                    'target': $scope.phonenumber,
                    'code': $scope.code
                },
                'mobile_code': $scope.mobile_code_values[$scope.mobilecode_index]
            };
            if ($scope.partner_code || code) {
                postData.partner_code = $scope.partner_code || code;
            }

            if (tags) {
                postData.tags = tags;
            }

            $http.post('/api/account/register', postData).success(function (data) {
                var redirect = $('#redirect').val();
                if (redirect)
                {
                    $window.location.href = redirect;
                }
                else
                {
                    $window.location.href = getLocalizedUrl('/');
                }
            }).error(function (data) {
                alert(data.error);
            });
        }

        $scope.login = function () {
            if (!myVerify($scope.loginVerify)) {
                return
            }

            var regr = /^[0-9]*$/;
            if (!regr.test($scope.loginValue.username)) {
                var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                if (!reg.test($scope.loginValue.username)) {
                    myVerifyShow('login-user', login_tips[13]);
                    return
                }
            } else {
                if ($scope.loginValue.username[0] == '0') {
                    myVerifyShow('login-user', login_tips[14]);
                    return
                }
                else if ($scope.loginValue.username.length < 10) {
                    myVerifyShow('login-user', login_tips[1]);
                    return
                }
                else if ($scope.loginValue.username.length > 11) {
                    myVerifyShow('login-user', login_tips[2]);
                    return
                }
            }


            $http.post('/api/account/login', {
                'username': $scope.loginValue.username,
                'password': $scope.loginValue.password,
                'rm': $scope.remember_me
            }).success(function (data) {
                var redirect = $('#redirect').val();
                if (redirect)
                {
                    $window.location.href = redirect;
                }
                else
                {
                    $window.location.href = getLocalizedUrl('/');
                }
            }).error(function (data) {
                alert(data.error);
            });
        }

        $scope.switchover = function (id) {
            $('#' + id).click();
        }
    })


    .controller('fakeRecommendationsCtrl', function ($scope, $window, $http, $interval) {
        $scope.mobile_codes = mobile_codes;
        $scope.mobile_code_values = ['86', '44'];

        $scope.mobilecode_index = 0;
        $scope.vcode = {};
        var codeTimer = {};

        $scope.showRegister = function () {
            $('#fakeRecommendationsLoginForm').fadeOut();
            $('#fakeRecommendationsForm').fadeIn();
        };

        $scope.showLogin = function () {
            $('#fakeRecommendationsLoginForm').fadeIn();
            $('#fakeRecommendationsForm').fadeOut();
        };

        $scope.sendVCode = function (event) {
            if (!(/\d{10}$/.test($scope.phonenumber))) {
                alert('请输入正确的手机号码');
                return;
            }

            if ($scope.phonenumber && $scope.phonenumber[0] == '0') {
                alert('手机号码不能以0开头');
                return;
            }

            var event = event || window.event;
            var target = $(event.target);
            if (target.attr('disabled') == 'disabled') {
                return;
            }

            target.attr('disabled', 'disabled');
            target.css('background-color', 'gray');
            target.css('color', 'white');
            target.text(mobile_sent);

            codeTimer.target = target;
            codeTimer.time = 59;
            codeTimer.timer = $interval(function () {
                codeTimer.target.text(mobile_sent + '(' + codeTimer.time-- + ')');
                if (codeTimer.time <= 0) {
                    $interval.cancel(codeTimer.timer);
                    codeTimer.target.removeAttr('style');
                    codeTimer.target.removeAttr("disabled");
                    codeTimer.target.text(mobile_send_vcode);
                }
            }, 1000);

            $http.post('/api/vcode/', {
                code_type: 'register',
                phonenumber: $scope.phonenumber,
                mobile_code: $scope.mobile_code_values[$scope.mobilecode_index]
            }).success(function (returnData) {
                $scope.vcode.id = returnData.id;
            }).error(function (data) {
                $scope.error = data.error;
            });
        };

        $scope.submit = function (valid, jump, code, tags) {
            if (valid) {
                var postData = {
                    'username': $scope.phonenumber,
                    'password': $scope.password,
                    'vcode': {
                        'target': $scope.phonenumber,
                        'code': $scope.code
                    },
                    'mobile_code': $scope.mobile_code_values[$scope.mobilecode_index]
                };

                if ($scope.partner_code || code) {
                    postData.partner_code = $scope.partner_code || code;
                }

                if (tags) {
                    postData.tags = tags;
                }

                $http.post('/api/account/register', postData).success(function (data) {
                    if (jump) {
                        $window.location.href = getLocalizedUrl('/');
                    }
                    else {
                        $window.location.reload();
                    }
                }).error(function (data) {
                    $scope.error = data.error;
                });
            }
        };

        $scope.login = function (valid, jump) {
            if (valid) {
                $http.post('/api/account/login', {
                    'username': $scope.username,
                    'password': $scope.login_password
                }).success(function (data) {
                    if (jump) {
                        var bind = false;
                        var querystring = $window.location.search;
                        if (querystring) {
                            querystring.split('&').forEach(function (item) {
                                var words = item.split('=');
                                if (words[0] == 'bind' || words[0] == '?bind') {
                                    if (decodeURIComponent(words[1]) == 'true') {
                                        bind = true;
                                    }
                                }
                            });
                        }

                        if (bind) {
                            $window.location.href = getLocalizedUrl('/account/bind');
                        }
                        else {
                            if (data.role == 'partner') {
                                $window.location.href = getLocalizedUrl('/partner/account');
                            } else {
                                $window.location.href = getLocalizedUrl('/');
                            }
                        }
                    }
                    else {
                        $window.location.reload();
                    }
                }).error(function (data) {
                    $scope.login_error = data.error;
                });
            }
        }
    })

    .controller('accountPanelCtrl', function ($scope, $window, $http, $interval) {
        $scope.new_email_vcode = {};
        $scope.new_phone_vcode = {};
        $scope.mobile_codes = mobile_codes;
        $scope.mobile_code_values = ['86', '44'];

        var portraitImg, imgUrl, jcrop_api;

        $scope.init = function() {
            verifyInit();
            inputTypeFileInit();
            $http.get('/api/account/accountinfo').success(function (data) {
                $scope.accountInfo = data.accountInfo;
                $scope.portraitUrl = data.portraitUrl;
                $scope.new_mobilecode_index = 0;
                initCanvas();

                for (var i = 0; i < $scope.mobile_code_values.length; i++) {
                    if ($scope.mobile_code_values[i] == $scope.accountInfo.mobile_code) {
                        $scope.new_mobilecode_index = i;
                    }
                }
            });
        }

        function initCanvas() {
            var canvas = document.getElementById('myPortrait');
            var context = canvas.getContext('2d');
            context.clearRect(0,0,200,200);
        }

        function verifyInit() {
            $scope.alter_displayname_verify = [
                {
                    id:'new_displayname',
                    verify: {
                        required: true,
                        minlength: 2,
                        maxlength: 11,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                }
            ];

            $scope.alter_password_verify = [
                {
                    id: 'password_old_password',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                },
                {
                    id: 'new_password',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                },
                {
                    id: 'new_repassword',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        blank: true,
                        password: 'new_password'
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                }
            ];

            $scope.alter_number_verify = [
                {
                    id: 'new_phonenumber',
                    verify: {
                        required: true,
                        minlength: 10,
                        maxlength: 11,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                },
                {
                    id: 'phonenumber_old_password',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                },
                {
                    id: 'new_phone_vcode',
                    verify: {
                        required: true,
                        minlength: 4,
                        maxlength: 6,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                },
            ];

            $scope.alter_email_verify = [
                {
                    id: 'new_email',
                    verify: {
                        required: true,
                        email: true,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                },
                {
                    id: 'email_old_password',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                },
                {
                    id: 'new_email_vcode',
                    verify: {
                        required: true,
                        minlength: 4,
                        maxlength: 6,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                }
            ];
            myVerifyChange($scope.alter_displayname_verify);
            myVerifyChange($scope.alter_password_verify);
            myVerifyChange($scope.alter_number_verify);
            myVerifyChange($scope.alter_email_verify);
        }

        function reset() {
            myVerifyHide($scope.alter_displayname_verify);
            myVerifyHide($scope.alter_password_verify);
            myVerifyHide($scope.alter_number_verify);
            myVerifyHide($scope.alter_email_verify);

            $scope.new_displayname = null;

            $scope.password_old_password = null;
            $scope.new_password = null;
            $scope.new_repassword = null;

            $scope.new_phonenumber = null;
            $scope.new_phone_vcode = {};
            $scope.phonenumber_old_password = null;

            $scope.new_email = null;
            $scope.email_old_password = null;
            $scope.new_email_vcode = {};
        }

        $scope.digestScope = function () {
            setTimeout(function () {
                try {
                    $scope.$digest();
                }
                catch (error) {
                }
            }, 200);
        };

        function inputTypeFileInit() {
            $scope.selectFile = false;
            portraitImg = document.getElementById('portrait-img');
            $('input[type=file]').change(function(){
                var file = this.files[0];
                var reader = new FileReader();
                reader.onload = function(){
                    // 通过 reader.result 来访问生成的 DataURL
                    portraitImg.removeAttribute('style');

                    portraitImg.src = reader.result;
                    imgUrl = reader.result;

                    if($scope.selectFile) {
                        jcrop_api.destroy();
                    }

                    $scope.selectFile = true;
                    $scope.digestScope();

                    $('#portrait-img').Jcrop({
                        allowSelect: false,
                        aspectRatio: 1,
                        bgFade:     true,
                        keySupport: false,
                        bgOpacity: .5,
                        setSelect: [ 0, 0, 200, 200],
                        onChange: showCanvas
                    },function(){
                      jcrop_api = this;
                    });
                };
                reader.readAsDataURL(file);
            });
        }

        function showCanvas(c) {
            var canvas = document.getElementById('myPortrait');
            var context = canvas.getContext('2d');
            context.fillStyle = "#ffffff";
            context.clearRect(0,0,200,200);
            var imageObj = new Image();
            var img = document.getElementById('portrait-img');
            var imgOriginal = getImgNaturalDimensions(img);
            var scaling = imgOriginal.scaling;
            imageObj.src = imgUrl;

            imageObj.onload = function() {
              // draw cropped image
              var sourceX = c.x * scaling;
              var sourceY = c.y * scaling;
              var sourceWidth = c.w * scaling;
              var sourceHeight = c.h * scaling;
              var destWidth = 200;
              var destHeight = 200;
              var destX = 0;
              var destY = 0;
              context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
            };
        }

        function getImgNaturalDimensions(img) {
            var nWidth, nHeight, scaling, scalingW, scalingH, width, height;
            if (img.naturalWidth) {
                nWidth = img.naturalWidth;
                nHeight = img.naturalHeight;
                compute();
            }
            else { // IE6/7/8
                var imgae = new Image()
                image.src = img.src;
                image.onload = function() {
                    nWidth = image.width;
                    nHeight = image.height;
                    compute();
                }
            }

            function compute() {
                width = parseInt(img.style.width);
                height = parseInt(img.style.height);

                scaling = nWidth / width;
            }
            return {
                nWidth: nWidth,
                nHeight: nHeight,
                scaling: scaling,
                width: width,
                height: height
            }
        }

        $scope.postPortraitImg = function() {
            if(!$scope.selectFile) {
                return
            }
            var canvas = document.getElementById('myPortrait');
            var data = canvas.toDataURL();

            data = data.split(',')[1];
            data = window.atob(data);
            var ia = new Uint8Array(data.length);
            for (var i = 0; i < data.length; i++) {
                ia[i] = data.charCodeAt(i);
            };

            var blob = new Blob([ia], {type:"image/png"});

            var fd = new FormData();

            fd.append('file',blob);
            $.ajax({
                url:"/api/account/portrait/",
                type:"POST",
                data:fd,
                processData : false,
                contentType : false,
                success:function(data){
                    $scope.selectFile = false;
                    jcrop_api.destroy();
                    portraitImg.removeAttribute('style');
                    portraitImg.src = "";
                    initCanvas();
                    hideAlterFormPage();

                    $scope.portraitUrl = data.url;

                    $('#my_nav_portrait').css({'background-image':"url('"+ data.url +"')"});

                    $scope.digestScope();

                    myTipsNew('头像修改成功', true,false);

                },
                error : function(responseStr) {
                    myTipsNew('头像上传失败', false,false);
                }
            });
        }

        $scope.showAlterFormPage = function(fromId,btId) {
            reset();
            if($('#' + fromId).hasClass('active')) {
                $("#" + fromId).removeClass('active');
                $("#" + btId + " .list-bt").text("编辑");
                return
            }
            $(".alter-form").removeClass('active');
            $(".list-row .list-bt").text("编辑");

            $("#" + btId + " .list-bt").text("收起");
            $("#" + fromId).addClass('active');
        }

        function hideAlterFormPage() {
            $(".alter-form").removeClass('active');
            $(".list-row .list-bt").text("编辑");
            reset();
        }

        //verification code phone
        $scope.sendVCodePhone = function() {
            var verify = [
                {
                    id: 'new_phonenumber',
                    verify: {
                        required: true,
                        minlength: 10,
                        maxlength: 11,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                }
            ];

            var data = {
                phonenumber : $scope.new_phonenumber,
                mobile_code : $scope.mobile_code_values[$scope.new_mobilecode_index],
                code_type: 'phone'
            };

            sendCode(verify,'sendV-Code-Phone',data,function(returnData){
                $scope.new_phone_vcode.id = returnData.id;
            });
        }

        //verification code email
        $scope.sendVCodeEmail = function() {
            var verify = [
                {
                    id: 'new_email',
                    verify: {
                        required: true,
                        email: true,
                        blank: true
                    },
                    messages: {
                        required: "这是必填哦"
                    }
                }
            ];

            var data = {
                email: $scope.new_email,
                code_type: 'email'
            };

            sendCode(verify,'sendV-Code-Email',data, function(returnData){
                $scope.new_email_vcode.id = returnData.id;
            });
        }

        //verification code
        function sendCode(verify, code_bt_id, postData, succeed, errorHandling) {
            if(!myVerify(verify)) {
                return
            }
            $http.post('/api/vcode/', postData).success(function (returnData) {
                myAuthCode(code_bt_id);
                if(succeed) {
                    succeed(returnData);
                }
            }).error(function (data) {
                if(errorHandling) {
                    errorHandling();
                    return
                }
                 myTipsNew('验证码发送失败', false,false);
            });
        }

        //select portrait file
        $scope.selectPortraitFile = function() {
            $("#portrait-file").click();
        }

        //update displayName
        $scope.updateDisplayName = function () {
            if(!myVerify($scope.alter_displayname_verify)) {
                return
            };

            var new_displayname = $scope.new_displayname;

            update({
                'displayname': $scope.new_displayname
            }, function () {
                $scope.accountInfo.displayname = $scope.new_displayname;
                $('#my_nav_displayname').text($scope.new_displayname);
                $scope.new_displayname = null;
                hideAlterFormPage();
                myTipsNew('昵称修改成功',true,false);
            },function(data) {
                myTipsNew('昵称修改失败',false,false);
            });
        }

        //update email
        $scope.updateEmail = function () {
            if(!myVerify($scope.alter_email_verify)) {
                return
            };
            var dataPost = {
                'old_password': $scope.email_old_password,
                'email': $scope.new_email,
                'vcode': $scope.new_email_vcode
            };

            update(dataPost, '/api/account/updateemail', function () {
                $scope.email_old_password = null;

                $scope.accountInfo.email = $scope.new_email;
                $scope.accountInfo.is_email_verified = true;
                $scope.new_email = null;
                $scope.new_email_vcode = {};
                hideAlterFormPage();
                myTipsNew('邮箱修改成功',true,false);
            },function(data) {
                if(data['error'].indexOf("邮箱") != -1) {
                        myVerifyShow('new_email',data['error']);
                } else if(data['error'].indexOf("密码") != -1) {
                    myVerifyShow('email_old_password',data['error']);
                } else if(data['error'].indexOf("验证码") != -1) {
                    myVerifyShow('new_email_vcode',data['error']);
                }
                myTipsNew('邮箱修改失败',false,false);
            });
        }

        //update phoneNumber
        $scope.updatePhoneNumber = function () {
            if(!myVerify($scope.alter_number_verify)) {
                return
            }

            var dataPost = {
                'old_password': $scope.phonenumber_old_password,
                'phonenumber': $scope.new_phonenumber,
                'vcode': $scope.new_phone_vcode,
                'mobile_code': $scope.mobile_code_values[$scope.new_mobilecode_index]
            };

            update(dataPost, '/api/account/updatephonenumber', function () {
                $scope.phonenumber_old_password = null;

                $scope.accountInfo.phonenumber = $scope.new_phonenumber;
                $scope.new_phonenumber = null;
                $scope.new_phone_vcode = {};
                hideAlterFormPage();
                myTipsNew('手机号码修改成功', true,false);
            }, function(data) {
                if(data['error'].indexOf("号") != -1) {
                    myVerifyShow('new_phonenumber',data['error']);
                } else if(data['error'].indexOf("密码") != -1) {
                    myVerifyShow('phonenumber_old_password',data['error']);
                } else if(data['error'].indexOf("验证码") != -1) {
                    myVerifyShow('new_phone_vcode',data['error']);
                }
                myTipsNew('手机号码修改失败',false,false);
            });
        }

        //update password
        $scope.updatePassword = function () {
            if(!myVerify($scope.alter_password_verify)) {
                return
            }
            update({
                'old_password': $scope.password_old_password,
                'new_password': $scope.new_password
            }, function () {
                $scope.password_old_password = null;
                $scope.new_password = null;
                $scope.new_repassword = null;
                hideAlterFormPage();
                myTipsNew('密码修改成功', true,false);
            }, function(data) {
                myVerifyShow('password_old_password',data['error']);
                myTipsNew('密码修改失败',false,false);
            });
        }

        //update post
        function update(accountInfo, url, succeed, errorHandling) {
            if (typeof(url) == 'function') {
                errorHandling = succeed;
                succeed = url;
                url = '/api/account/accountinfo';
            }

            $http.post(url, {'accountInfo': accountInfo}).success(function (returnData) {
                for (var property in accountInfo) {
                    if (property != "vcode") {
                        $scope.accountInfo[property] = accountInfo[property];
                    }
                }

                if (succeed) {
                    succeed();
                }

                showOperationResult(null, generic_save_success);
            }).error(function (data) {
                if(errorHandling) {
                    errorHandling(data);
                    return
                }
                myTipsNew('修改失败',false,false);
            });
        }
    })

    .controller('accountRegisterCtrl', function ($scope, $window, $http) {
        $scope.registerData = {};

        $scope.submit = function (isValid, partner_code) {
            if (isValid) {
                if (partner_code) {
                    $scope.registerData.partner_code = partner_code;
                }

                $http.post('/api/account/register', $scope.registerData).success(function (data) {
                    $window.location.href = getLocalizedUrl('/');
                }).error(function (data) {
                    $scope.error = data.error;
                    $scope.getVCode();
                });
            }
        };

        $scope.getVCode = function () {
            $http.post('/api/vcode', {
                code_type: 'register'
            }).success(function (data) {
                $scope.registerData.vcode = {
                    id: data.id,
                    url: data.url
                };
            });
        }

        $scope.getVCode();
    })

    .controller('adLandingRegisterCtrl', function ($scope, $window, $http, $interval) {
        $scope.mobile_codes = mobile_codes;
        $scope.mobile_code_values = ['86', '44'];
        $scope.mobilecode_index = 0;
        $scope.showProcess = 'process1';

        $scope.selectedIssue = [];

        $scope.surveyVerify = [
            {
                id: 'survey-username',
                verify: {
                    required: true,
                    minlength: 10,
                    maxlength: 11,
                    blank:true
                },
                messages: {
                    required: "请输入10-11位手机号码",
                    minlength: "你见过这么短的手机号码吗？",
                    maxlength: "手机号码太长了，我记不住。"
                }
            },
            {
                id: 'survey-password',
                verify: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    blank:true
                },
                messages: {
                    required: "密码是必填的哦！",
                    minlength: "密码太短，不安全",
                    maxlength: "密码太长，我怕你忘记了。"
                }
            },
            {
                id: 'survey-code',
                verify: {
                    required: true,
                    minlength: 6,
                    maxlength: 6,
                    blank:true
                },
                messages: {
                    required: "验证码是必填的哦！",
                    minlength: "我发给你的验证码没那么短！",
                    maxlength: "我发给你的验证码没那么长！"
                }
            }
        ];

        $scope.wechatVerify = [
            {
                id: 'wechat-name',
                verify: {
                    required: true,
                    minlength: 6,
                    maxlength: 20
                },
                messages: {
                    required: "微信账号是必填的哦！",
                    minlength: "必须大于等于6位",
                    maxlength: "必须小于等于20位"
                }
            }
         ];

        $scope.survey = {
            username: null,
            password: null,
            code: null,
            vcodeId: null,
            weixin: null
        }

        $('.survey-form').on('wheel', function (e) {
            e.stopPropagation();
        });

        myVerifyChange($scope.surveyVerify);
        myVerifyChange($scope.wechatVerify);
        var myAuthCodeStatus = true;

        function myAuthCode(id) {
            if(!myAuthCodeStatus) {
                return
            }
            myAuthCodeReciprocal(60);
            function myAuthCodeReciprocal(code) {
                myAuthCodeStatus = false;
                setTimeout(function(){
                    var i = code;
                    $('#' + id).addClass('disabled');
                    $('#' + id).text(i + "s");
                    i--;
                    if(i < 0) {
                        $('#' + id).text("重新发送");
                        myAuthCodeStatus = true;
                        $('#' + id).removeClass('disabled');
                        return
                    }
                    myAuthCodeReciprocal(i);
                },1000);
            }
        }

        $scope.surveyCodeBtn = function() {
            if (!myAuthCodeStatus) {
                return
            }

            if (!myVerify([
                    {
                        id: 'survey-username',
                        verify: {
                            required: true,
                            minlength: 10,
                            maxlength: 11,
                            blank:true
                        },
                        messages: {
                            required: "请输入10-11位手机号码",
                            minlength: "你见过这么短的手机号码吗？",
                            maxlength: "手机号码太长了，我记不住。"
                        }
                    }
                ])) {
                return
            }
            var phonenumber = $('#survey-username').val();

            if (phonenumber[0] == '0') {
                myVerifyShow('survey-username', "手机号码没有0开头的哦！")
                return;
            }

            $http.post('/api/vcode/', {
                code_type: 'register',
                phonenumber: $scope.survey.username,
                mobile_code: 86
            }).success(function (returnData) {
                myAuthCode('survey-code-btn');
                $scope.survey.vcodeId = returnData.id
            }).error(function (data) {
                alert('验证码发送失败');
            });
        }

        $('.wechat-form .i-close').click(function() {
            $scope.jumpUrl = $scope.jumpUrl || null;
            if($scope.jumpUrl) {
                setTimeout("javascript:location.href='" + $scope.jumpUrl + "'",0);
            } else {
                window.location.reload(true);
            }
        })

        $('.red-packets-form .i-close').click(function() {
            $scope.jumpUrl = null;
            $('#login-rp-popup').fadeOut();
        })

        $scope.surveyIssueSubmit = function() {
            var errorStatus = true;
            for(var i = 0; i < 14; i++) {
                if(!$scope.selectedIssue[i]) {
                    errorStatus = false;
                    $('#issue-list-' + i).addClass('error-issue');
                }
            }
            if(!errorStatus) {
                return
            }

            $('#survey-issue').hide();
            $('#survey-login').show();

            $('#survey-two').addClass('active');
            $('.survey-title div').addClass('title-two');
        }

        $scope.surveyLoginSubmit = function() {
            if (!myVerify($scope.surveyVerify)) {
                return
            }

            var phonenumber = $('#survey-username').val();

            if (phonenumber[0] == '0') {
                myVerifyShow('survey-username', "手机号码没有0开头的哦！")
                return;
            }

            var postData = {
                'username': $scope.survey.username,
                'password': $scope.survey.password,
                'vcode': {
                    'target': $scope.survey.phonenumber,
                    'code': $scope.survey.code
                },
                'mobile_code': 86
            };

            $http.post('/api/account/register', postData).success(function (data) {
                submitSureyIssue();
            }).error(function (data) {
                if(data['error'].indexOf("验证码") != -1) {
                    myVerifyShow('survey-code',data['error']);
                } else if(data['error'].indexOf("用户") != -1
                    || data['error'].indexOf("手机") != -1
                    || data['error'].indexOf("号码") != -1) {
                    myVerifyShow('survey-username',data['error']);
                }
            });
        }

        function submitSureyIssue() {
            var qa = {
                qa: {
                    'type': 0,
                    'answers': $scope.selectedIssue
                }
            }

            $http.post('/api/account/qa', qa).success(function (data) {
                $('#survey-login').hide();
                $('#survey-weixin').show();

                $('#survey-three').addClass('active');
                $('.survey-title div').addClass('title-three');

                $('#survey-weixin-bt').text('确定');
                $('#survey-weixin-bt').removeClass('disabled');
            }).error(function (data) {

            });
        }

        $scope.closeSurveyTips = function() {
            $scope.selectedIssue = [];
            $('.error-issue').removeClass("error-issue");
            $('.radio').removeClass('active');
            $scope.survey = {
                username: null,
                password: null,
                code: null,
                vcodeId: null,
                weixin: null
            }
            $('body').removeClass('filter-blur');

            $('#survey-form').hide();

            $('#survey-page-tips').hide();

            $('#survey-two').removeClass('active');
            $('#survey-three').removeClass('active');
            $('.survey-title div').removeClass('title-two');
            $('.survey-title div').removeClass('title-three');
            $('#survey-issue').show();
            $('#survey-login').hide();
            $('#survey-weixin').hide();
            $('#survey-form-page').show();
        }

        $scope.surveyFormIssueActive = function(issueIndex,redioIndex) {
            $scope.selectedIssue[parseInt(issueIndex)] = {
                q_id:parseInt(issueIndex),
                a_id:parseInt(redioIndex)
            };
            $('#issue-list-' + parseInt(issueIndex)).removeClass('error-issue');
            $('.radio'+issueIndex).removeClass('active');
            $('#radio'+issueIndex +'-'+redioIndex).addClass('active');
        }


        $scope.showSurveyForm = function() {
            $('body').addClass('filter-blur');
            $('#survey-form').show();
        }

        $scope.continueSurvey = function() {
            $('#survey-page-tips').hide();
            $('#survey-form-page').show();
        }

        $scope.endSurveyPage = function() {
            $('#survey-form-page').hide();
            $('#survey-page-tips').show();
        }

        $scope.section1 = function () {
            $.fn.fullpage.moveTo(1);
        };

        $scope.switchProcess = function (value) {
            if ($scope.showProcess == value) {
                return;
            }
            $scope.showProcess = value
        };

        $scope.sectionLoginRP = function (url, action) {
            if (action) {
                trackPageAction(action);
            }

            $scope.jumpUrl = url || null;
            // $('#login-popup').fadeIn();
            $('.wechat-form').hide();
            $('.red-packets-form').show();
            $('#login-rp-popup').fadeIn();
        };

        $scope.sectionLogin = function (url, action) {
            if (action) {
                trackPageAction(action);
            }

            $scope.jumpUrl = url || "/";
            $('#login-popup').fadeIn();
        };

        $scope.sectionRegisterRP = function() {
            $('.wechat-form').hide();
            $('.red-packets-form').show();
            $('#login-rp-popup').fadeIn();
        }

        $scope.surveyFormWechat = function() {
            if($('#survey-weixin-bt').hasClass('disabled')) {
                return
            }

            var wechatVerify = [
                {
                    id: 'survey-weixin-value',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 20,
                        blank:true
                    },
                    messages: {
                        required: "微信账号是必填的哦！",
                        minlength: "必须大于等于6位",
                        maxlength: "必须小于等于20位"
                    }
                }
             ]
            if (!myVerify(wechatVerify)) {
                return
            }

            var postData = {
                'wechat_account': $scope.survey.weixin
            };

            $http.post('/api/account/wechataccount', postData).success(function (data) {
                $('#survey-weixin-bt').text('正在提交……');
                $('#survey-weixin-bt').addClass('disabled');

                setTimeout(function() {
                    location.reload();
                },3000)
            }).error(function (data) {
                alert(data['error']);
            });
        }

        $scope.submitFormBtnWechat = function() {
            if (!myVerify($scope.wechatVerify)) {
                return
            }

            var postData = {
                'wechat_account': $('#wechat-name').val()
            };

            $.ajax({
              type: 'post',
              url: '/api/account/wechataccount',
              data: JSON.stringify(postData),
              contentType: "application/json",
              success: function(result){
                    $('.from-wechat').fadeOut(function() {
                        $('.red-packets-check').fadeIn();
                    });

                    setTimeout(function(){
                        $('.login-rp-popup').fadeOut();
                        $('.red-packets').fadeOut();
                        if($scope.jumpUrl) {
                            setTimeout("javascript:location.href='" + $scope.jumpUrl + "'",0);
                        } else {
                            window.location.reload(true);
                        }
                    },2000);

              },
              error:function(err){
                    alert((JSON.parse(err.response)).error);
              }
            });
        }

        $scope.vcode = {};
        var codeTimer = {};

        $scope.init = function () {
            $http.get('/docs/zh-cn/university_rank.json').success(function (data) {
                $scope.schoolList = data;
            });


            var condition = {
                filters: [{
                    description: '国家',
                    name: 'country',
                    value: '澳大利亚'
                }],
                page: 0,
                rankType: '世界排名',
                size: 100,
                text: ''
            };

            $http.post('/api/app/search', condition).success(function (res) {
                $scope.UASchoolList = res.universities;
            });
        };

        $scope.starCount = function (rank) {
            if (rank > 5) {
                return [];
            }

            var temp = [];

            for (var i = 0; i < rank; i++) {
                temp.push(i);
            }

            return temp;
        };

        $scope.digestScope = function () {
            setTimeout(function () {
                try {
                    $scope.$digest();
                }
                catch (error) {
                }
            }, 200);
        };

        $scope.sendVCode = function (event) {
            if (!$scope.phonenumber) {
                myTips('请输入手机号码', false);
                return;
            }

            if (!(/\d{10}$/.test($scope.phonenumber))) {
                myTips('手机号码格式不对', false);
                return;
            }

            var event = event || window.event;
            var target = $(event.target);
            if (target.attr('disabled') == 'disabled') {
                return;
            }

            target.attr('disabled', 'disabled');
            target.text(mobile_sent);

            codeTimer.target = target;
            codeTimer.time = 59;
            codeTimer.timer = $interval(function () {
                codeTimer.target.text(mobile_sent + '(' + codeTimer.time-- + ')');
                if (codeTimer.time <= 0) {
                    $interval.cancel(codeTimer.timer);
                    codeTimer.target.removeAttr("disabled");
                    codeTimer.target.text(mobile_send_vcode);
                }
            }, 1000);

            var body = {
                code_type: 'register',
                phonenumber: $scope.phonenumber,
                mobile_code: $scope.mobile_code_values[$scope.mobilecode_index]
            };

            $http.post('/api/vcode/', body).success(function (returnData) {
                $scope.vcode.id = returnData.id;
            }).error(function (data) {
                $scope.error = data.error;
            });
        };

        $scope.rpSubmit = function() {
            if (!validate()) {
                return;
            }

            var code = ((location.search.match(/[?|&]code=(.+?)(&|$)/) || ['', ''])[1] || '');
            var tags = ((location.search.match(/[?|&]tags=(.+?)(&|$)/) || ['', ''])[1] || '');

            var postData = {
                username: $scope.phonenumber,
                password: $scope.password,
                vcode: {
                    target: $scope.phonenumber,
                    code: $scope.code
                },
                mobile_code: $scope.mobile_code_values[$scope.mobilecode_index]
            };

            if (code) {
                postData.partner_code = code;
            }

            if (tags) {
                postData.tags = tags;
            }

            $http.post('/api/account/register', postData).success(function (data) {
                $('.red-packets-check').hide();
                $('.red-packets-form').hide();
                $('.wechat-form').show();
                $('.from-wechat').show();
                $('#login-rp-popup').fadeIn();
            }).error(function (data) {
                myTips(data.error);
            });
        }

        $scope.submit = function (jumpUrl) {
            var url = jumpUrl || '/';

            if (!validate()) {
                return;
            }

            var code = ((location.search.match(/[?|&]code=(.+?)(&|$)/) || ['', ''])[1] || '');
            var tags = ((location.search.match(/[?|&]tags=(.+?)(&|$)/) || ['', ''])[1] || '');

            var postData = {
                username: $scope.phonenumber,
                password: $scope.password,
                vcode: {
                    target: $scope.phonenumber,
                    code: $scope.code
                },
                mobile_code: $scope.mobile_code_values[$scope.mobilecode_index]
            };

            if (code) {
                postData.partner_code = code;
            }

            if (tags) {
                postData.tags = tags;
            }

            $http.post('/api/account/register', postData).success(function (data) {
                location.href = url || '/';
            }).error(function (data) {
                myTips(data.error);
            });
        };

        function validate() {
            if (!$scope.phonenumber) {
                myTips('请输入手机号码');
                return false;
            }

            if (!$scope.code) {
                myTips('请输入验证码');
                return false;
            }

            if (!$scope.password) {
                myTips('请输入密码');
                return false;
            }

            if (!$scope.repassword) {
                myTips('请输入确认密码');
                return false;
            }

            if (!(/\d{10}$/.test($scope.phonenumber))) {
                myTips('手机号码格式不对');
                return false;
            }

            if ($scope.password.length < 6) {
                myTips('请输入6位以上长度密码');
                return false;
            }

            if ($scope.password !== $scope.repassword) {
                myTips('两次密码不一致');
                return false;
            }

            return true;
        }
    })

    .controller('applicationCtrl', function ($scope, $window, $http) {
        $scope.load = function () {
            myloading();
            $http.get('/api/account/checklist').success(function (response) {
                $scope.normal = [];
                $scope.removed = [];
                $scope.comments = response.comments || null;

                angular.forEach(response.records, function (record) {
                    if (record.stateRaw == 'Removed') {
                        $scope.removed.push(record);
                    }
                    else {
                        $scope.normal.push(record);
                    }
                });

                $scope.applications = [$scope.normal, $scope.removed];
                myloading();
            });
        };

        $scope.jumpToContract = function () {
            angular.element('#contractLink').click();
        }
    })

    .controller('applicationDoc', function ($scope, $window, $http) {
        init();
        $scope.load = function () {
            myloading();
            initBackgroundInfo();
            initInstrumentsMaterial();
            initUniversitiesMaterials();
            myloading();
        };

        function init() {

            $scope.application_doc_mytips = application_doc_mytips;
            $scope.application_doc_head_title = application_doc_head_title;

            $scope.countries = countries;
            $scope.instrumentsMaterial = [];
            $scope.unfold = {
                id: "unfoldAnimate1-1",
                selected: true
            };
            $scope.backgroundInfo = {
                gender: '',
                nationality: '',
                visa_rejected: false,
                study_abroad: false
            };
            $scope.unique = {
                type: '',
                disabled: false
            };

            $scope.labelPage = {
                'upload-info': 'background-info',
                'template-library': '',
                'petition-material': 'material-instruments',
                'material-confirmation': ''
            };

            $scope.menuPage = 'upload-info';
            $scope.labelMenu = $scope.menuPage;

            $scope.submitPendingStatus = false;
            $scope.submitPushBackStatus = false;

            $scope.extras = {};

            $scope.ieltsListStatus = false;
            $scope.ieltsListDate = null;

            $scope.doubleDiploma = false;

            $scope.agreement = false;
        }

        $scope.agreementTrue = function () {
            if ($scope.backgroundInfo.confirmed) {
                return
            }
            $scope.agreement = !$scope.agreement;
        };

        $scope.submitAgreement = function () {
            $http.get('/api/account/applicationdata/confirm').success(function (response) {
                myTips('材料确认成功', true);
                $scope.backgroundInfo.confirmed = true;
                location.href='/account/application/offer';
            });
        }

        $scope.ieltsListAnddoubleDiploma = function () {
            if (!$scope.ieltsListStatus && _.isEmpty($scope.ieltsListDate)) {
                myTips("请填写预计雅思考试时间", false);
                return
            }
            var data = {
                ielts_target_date: null,
                is_double_degree: $scope.doubleDiploma
            };
            if (!$scope.ieltsListStatus) {
                data.ielts_target_date = $scope.ieltsListDate
            }

            $.ajax({
                type: 'POST',
                url: '/api/account/applicationdata',
                data: JSON.stringify({applicationData: data}),
                contentType: 'application/json; charset=utf-8',
                timeout: 3000,
                complete: function () {
                    myTips("保存成功", true);
                }
            });
        };

        $scope.windowOpen = function (url) {
            window.open(url);
        };

        $scope.extrasUploadingModelShow = function (type, index, _id) {
            $("#extrasUploadingModel").fadeIn();

            $scope.extrasIndex = index;
            $scope.extrasType = type;
            $scope.extrasFileName = null;

            $scope.extras = {
                name: null,
                occupation: null,
                phone: null,
                email: null,
                address: null
            };

            if (_id) {
                var uploadingFile = $scope.universitiesMaterials.records[index].uploadingFile[type];
                $scope.extrasFileName = uploadingFile.filename;

                $scope.extras = {
                    name: uploadingFile.extras.name.value,
                    occupation: uploadingFile.extras.occupation.value,
                    phone: uploadingFile.extras.phone.value,
                    email: uploadingFile.extras.email.value,
                    address: uploadingFile.extras.address.value
                };
            }

        };

        $scope.extrasUploadingModelHide = function () {
            $("#extrasUploadingModel").fadeOut();
        };

        $("#extras-uploading-file").bind('change', function () {
            var file = $("#extras-uploading-file").val();
            var fuleName = getFileName(file);
            $scope.extrasFileName = fuleName;
            $scope.digestScope();
        });

        function getFileName(o) {
            var pos = o.lastIndexOf("\\");
            return o.substring(pos + 1);
        }

        $('#extras-uploading-file').fileupload({
            dataType: 'json',
            url: "/api/account/subdoc",
            singleFileUploads: false,
            acceptFileTypes: /(\.|\/)(pdf|doc|docx|png|jpg|jpeg|gif|bmp)$/i,
            add: function (e, data) {
                $('#123456789').unbind('click');
                data.context = $('#123456789').click(function () {
                    var verify = true
                    _.each($scope.extras, function (item) {
                        if (_.isEmpty(item)) {
                            verify = false
                        }
                    });
                    if (!verify) {
                        myTips("信息填写不完整，不能提交", false);
                        return
                    }

                    var index = $scope.extrasIndex;
                    var type = $scope.extrasType;

                    data.formData = {
                        type: type,
                        course_id: $scope.universitiesMaterials.records[index].course_id
                    };
                    if ($scope.universitiesMaterials.records[index].uploadingFile[type]._id) {
                        data.formData._id = $scope.universitiesMaterials.records[index].uploadingFile[type]._id;
                    }

                    for (var property in $scope.extras) {
                        data.formData[property] = $scope.extras[property]
                    }
                    data.submit();
                });
            },
            done: function (e, data) {
                myTips("上传成功", true);
                $('#extras-uploading-file-loading').hide();
                var index = $scope.extrasIndex;
                var type = $scope.extrasType;
                $scope.universitiesMaterials.records[index].uploadingFile[type] = data.result;
                var extras = _.indexBy(data.result.extras, "key");
                $scope.universitiesMaterials.records[index].uploadingFile[type].extras = extras;
                $scope.extrasUploadingModelHide();
                $scope.digestScope();
            },
            progressall: function (e, data) {
                $('#extras-uploading-file-loading').show();
            },
            error: function (e, result) {
                if (e.status == 500) {
                    myTips('文件超过10M', false);
                    $('#extras-uploading-file-loading').hide();
                }
                else {
                    myTips("文件上传失败", false);
                }
            }
        });

        //选择文件
        $scope.extrasUploadingFile = function () {
            $("#extras-uploading-file").click();
        };

        $scope.docUploadFiles = function (id, inputId, type, courseId, index, _id) {
            if (type == 1) {
                var fileType = /(\.|\/)(pdf|doc|docx|png|jpg|jpeg|gif|bmp)$/i;
                var data = {type: id};
                if (courseId) {
                    data = {type: id, _id: courseId};
                }
                $("#" + inputId).fileupload({
                    url: "/api/account/doc",
                    singleFileUploads: false,
                    acceptFileTypes: fileType,
                    formData: data,
                    done: function (e, result) {
                        $scope.instrumentsMaterial[id] = result.result;
                        myTips($scope.application_doc_mytips[0], true);
                        setTimeout(function () {
                            $('#' + inputId + '-loading').hide();
                            $scope.digestScope();
                        }, 500)
                    },
                    progressall: function (e, data) {
                        if ($scope.instrumentsMaterial[id]) {
                            $scope.instrumentsMaterial[id].state = "UploadPending";
                        } else {
                            $scope.instrumentsMaterial[id] = {
                                state: "UploadPending"
                            }
                        }
                        $('#' + inputId + '-loading').show();
                    },
                    error: function (e, result) {
                        if (e.status == 500 || e.status == 413) {
                            myTips('文件超过10M', false);
                            $('#' + inputId + '-loading').hide();
                            if ($scope.instrumentsMaterial[id]) {
                                $scope.instrumentsMaterial[id].state = 'PushBack';
                            } else {
                                $scope.instrumentsMaterial[id] = {
                                    state: 'PushBack'
                                }
                            }
                        }
                        else {
                            myTips("文件上传失败", false);
                            $('#' + inputId + '-loading').hide();
                            if ($scope.instrumentsMaterial[id]) {
                                $scope.instrumentsMaterial[id].state = 'PushBack';
                            } else {
                                $scope.instrumentsMaterial[id] = {
                                    state: 'PushBack'
                                }
                            }
                        }
                    }
                });
                $('#' + inputId).click();

            } else if (type == 2) {
                var data = {type: id, course_id: courseId};
                if (_id) {
                    data = {type: id, course_id: courseId, _id: _id};
                }
                $("#" + inputId).fileupload({
                    url: "/api/account/subdoc",
                    singleFileUploads: false,
                    acceptFileTypes: /(\.|\/)(pdf|doc|docx|png|jpg|jpeg|gif|bmp)$/i,
                    formData: data,
                    done: function (e, result) {
                        $scope.universitiesMaterials.records[index].uploadingFile[id] = result.result;
                        myTips($scope.application_doc_mytips[0], true);
                        setTimeout(function () {
                            $('#' + inputId + '-loading').hide();
                            $scope.digestScope();
                        }, 500)
                    },
                    progressall: function (e, data) {
                        if ($scope.instrumentsMaterial[id]) {
                            $scope.instrumentsMaterial[id].state = "UploadPending";
                        } else {
                            $scope.instrumentsMaterial[id] = {
                                state: "UploadPending"
                            }
                        }
                        $('#' + inputId + '-loading').show();
                    },
                    error: function (e, result) {
                        if (e.status == 500 || e.status == 413) {
                            myTips('文件超过10M', false);
                            $('#' + inputId + '-loading').hide();
                            if ($scope.instrumentsMaterial[id]) {
                                $scope.instrumentsMaterial[id].state = 'PushBack';
                            } else {
                                $scope.instrumentsMaterial[id] = {
                                    state: 'PushBack'
                                }
                            }
                        }
                        else {
                            myTips("文件上传失败", false);
                            $('#' + inputId + '-loading').hide();
                            if ($scope.instrumentsMaterial[id]) {
                                $scope.instrumentsMaterial[id].state = 'PushBack';
                            } else {
                                $scope.instrumentsMaterial[id] = {
                                    state: 'PushBack'
                                }
                            }
                        }
                    }
                });
                $('#' + inputId).click();
            }
        };

        //背景资料 初始化数据 与 模型
        function initBackgroundInfo() {

            $http.get('/api/account/applicationdata').success(function (data) {
               $scope.backgroundInfo = data;

                $scope.backgroundInfo.visa_rejected_records = data.visa_rejected_records || [];
                $scope.backgroundInfo.study_exp_records = data.study_exp_records || [];
                $scope.backgroundInfo.crime_records = data.crime_records || [];

                $scope.ieltsListDate = $scope.backgroundInfo.ielts_target_date;
                $scope.doubleDiploma = $scope.backgroundInfo.is_double_degree;

                $scope.ieltsListStatus = true;

                $scope.agreement = $scope.backgroundInfo.confirmed || false;

                if ($scope.backgroundInfo.ielts_target_date) {
                    $scope.ieltsListStatus = false;
                }
            });
        }

        $scope.openUniversitiesMaterials = function () {
            $('#background-info-tab').removeClass('active');
            $('#instruments-material-tab').removeClass('active');
            $('#universities-materials-tab').addClass('active');
            $scope.labelTransition('universities-materials');
            $scope.digestScope();
        };

        $scope.openInstrumentsMaterial = function () {
            $('#background-info-tab').removeClass('active');
            $('#instruments-material-tab').addClass('active');
            $('#universities-materials-tab').removeClass('active');
            $scope.labelTransition('instruments-material');
            $scope.digestScope();
        };

        $scope.openBackgroundInfo = function () {
            $('#background-info-tab').addClass('active');
            $('#universities-materials-tab').removeClass('active');
            $('#instruments-material-tab').removeClass('active');
            $scope.labelTransition('background-info');
            $scope.digestScope();
        };

        $scope.backgroundInfoUpdate = function () {
            var data;
            var verify = false;
            initUpdate();

            if (verify) {
                myTips($scope.application_doc_mytips[1], false);
                return
            }

            $.ajax({
                type: 'POST',
                url: '/api/account/applicationdata',
                data: JSON.stringify({applicationData: data}),
                contentType: 'application/json; charset=utf-8',
                timeout: 3000,
                complete: function () {
                    myTips($scope.application_doc_mytips[2], true);
                    setTimeout(function () {
                        $scope.openInstrumentsMaterial();
                    }, 1200)
                }
            });
            function initUpdate() {
                data = {
                    gender: $scope.backgroundInfo.gender || null,   //性别
                    nationality: $scope.backgroundInfo.nationality || null,     //国籍
                    phonenumber: $scope.backgroundInfo.phonenumber || null,  //手机号码
                    email: $scope.backgroundInfo.email || null,   //电子邮件
                    address: $scope.backgroundInfo.address || null, //家庭住址 详细地址
                    fund_source: $scope.backgroundInfo.fund_source || null, //出国资金来源
                    temp_address_country: $scope.backgroundInfo.temp_address_country || null,  //临时地址 国家
                    temp_address_city: $scope.backgroundInfo.temp_address_city || null,   //临时地址 城市
                    temp_address_detail: $scope.backgroundInfo.temp_address_detail || null, //临时地址 详细地址
                    temp_address_start: $scope.backgroundInfo.temp_address_start || null, //临时地址 开始时间
                    temp_address_end: $scope.backgroundInfo.temp_address_end || null //临时地址 结束时间

                };

                _.each(data, function (value) {
                    if (_.isEmpty(value)) {
                        verify = true
                    }
                });

                var optionData = {
                    visa_rejected_records: $scope.backgroundInfo.visa_rejected_records,
                    study_exp_records: $scope.backgroundInfo.study_exp_records,
                    crime_records: $scope.backgroundInfo.crime_records
                };
                _.each(optionData, function (value, key) {
                    value = _.filter(value, function (item) {
                        var attr = _.values(item);

                        //忽略 添加但并没有填写信息的行
                        return !(_.contains(attr, '') || _.contains(attr, undefined));
                    });

                    optionData[key] = _.isEmpty(value) ? null : value;
                });

                _.extend(data, optionData);
            }
        };

        //文书材料 初始化数据 与 模型
        function initInstrumentsMaterial() {
            $http.get('/api/account/doc').success(function (data) {
                if (_.isEmpty(data)) {
                    var type = ['diploma', 'transcript', 'ielt', 'passport', 'cv', 'work', 'intern', 'certs', 'awards'];

                    _.each(type, function (type) {
                        if (_.isUndefined($scope.instrumentsMaterial[type])) {
                            $scope.instrumentsMaterial[type] = []
                        }
                    });
                    return
                }
                $scope.instrumentsMaterial = _.indexBy(data, 'type');

                var type = ['diploma', 'transcript', 'ielt', 'passport', 'cv', 'work', 'intern', 'certs'];

                _.each(type, function (type) {
                    if (_.isUndefined($scope.instrumentsMaterial[type])) {
                        $scope.instrumentsMaterial[type] = []
                    }
                })
            });
        }

        //各院校材料 初始化数据 与 模型
        function initUniversitiesMaterials() {
            var lang = getLanguageByUrl() || defaultLanguage;
            $http.get('/api/account/subdoc').success(function (data) {
               $scope.universitiesMaterials = data;
                var type = ['option', 'ps', 'ref1', 'ref2'];
                _.each($scope.universitiesMaterials.records, function (records) {
                    var uploadingFile = _.indexBy(records.subDocs, 'type');

                    _.each(type, function (type) {
                        if (_.isUndefined(uploadingFile[type])) {
                            uploadingFile[type] = [];
                        }
                    });

                    _.each(uploadingFile, function (item) {
                        var modelExtras = _.indexBy(item.extras, "key");
                        item.extras = modelExtras;
                    });

                    records.uploadingFile = uploadingFile;
                    submitPendingStatusJudge();
                })
            })
        }

        //状态判断
        function submitPendingStatusJudge() {
            var Pending = _.find($scope.instrumentsMaterial, function (type) {
                return type.state == "Pending";
            });
            if (!_.isEmpty(Pending)) {
                $scope.submitPendingStatus = true;
            }

            _.each($scope.universitiesMaterials.records, function (records) {
                var Pending = _.find(records.uploadingFile, function (file) {
                    return file.state == "Pending";
                });
                if (!_.isEmpty(Pending)) {
                    $scope.submitPendingStatus = true;
                }
            })
        }

        function submitPushBackStatusJudge() {
            $scope.submitPushBackStatus = false;

            var PushBack = _.find($scope.instrumentsMaterial, function (type) {
                return type.state == "PushBack";
            });
            if (!_.isEmpty(PushBack)) {
                $scope.submitPushBackStatus = true;
            }

            _.each($scope.universitiesMaterials.records, function (records) {
                var PushBack = _.find(records.uploadingFile, function (subDocs) {
                    return subDocs.state == "PushBack"
                });
                if (!_.isEmpty(PushBack)) {
                    $scope.submitPushBackStatus = true;
                }
            });
        }

        //删除 上传文档
        $scope.docDeleteFiles = function (item, type) {
            $.ajax({
                type: "DELETE",
                url: "/api/account/doc/" + item._id,
                data: "{}",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    $scope.instrumentsMaterial[type] = {};
                    myTips($scope.application_doc_mytips[3], true);
                    $scope.digestScope();
                }
            });
        };

        //删除 上传文档
        $scope.docUnDeleteFiles = function (item, type, index) {
            $.ajax({
                type: "DELETE",
                url: "/api/account/subdoc/" + item._id,
                data: "{}",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    $scope.universitiesMaterials.records[index].uploadingFile[type] = [];
                    myTips($scope.application_doc_mytips[3], true);
                    $scope.digestScope();
                }
            });
        };

        $scope.digestScope = function () {
            setTimeout(function () {
                try {
                    $scope.$digest();
                }
                catch (error) {
                }
            }, 200);
        };

        $scope.labelTransition = function (id) {
            if ($scope.labelPage[$scope.menuPage] == id && $scope.labelMenu == $scope.menuPage) {
                return
            }

            $('#' + $scope.labelPage[$scope.menuPage]).fadeOut(300);
            $scope.labelPage[$scope.menuPage] = id;
            setTimeout(function () {
                $('#' + id).fadeIn(300);

                if (id == 'material-instruments') {
                    $scope.unfoldAnimate('unfoldAnimate1-1', 'unfold1-1')
                } else if (id == 'learning-ability') {
                    $scope.unfoldAnimate('unfoldAnimate2-1', 'unfold2-1')
                } else if (id == 'academic-degree') {
                    $scope.unfoldAnimate('unfoldAnimate3-1', 'unfold3-1')
                } else if (id == 'petition-other') {
                    $scope.unfoldAnimate('unfoldAnimate4-1', 'unfold4-1')
                }
            }, 300)
        };

        $scope.memuTransition = function (id) {
            if ($scope.menuPage == id) {
                return
            }
            $('#' + $scope.menuPage).fadeOut(300);
            $scope.menuPage = id;
            setTimeout(function () {
                $('#' + id).fadeIn(300);
            }, 300)
        };

        $scope.submitData = function () {
            // if($scope.submitPendingStatus) {
            //     return
            // }
            // submitPushBackStatusJudge();
            // if($scope.submitPushBackStatus) {
            //     myTips($scope.application_doc_mytips[4],false)
            //     setTimeout(function(){
            //         $scope.submitPushBackStatus = false;
            //         $scope.digestScope();
            //     },1200);
            //     return
            // }
            var verify = false;
            var type = ['ps', 'ref1', 'ref2'];
            if (!$scope.instrumentsMaterial.diploma || !$scope.instrumentsMaterial.transcript) {
                verify = true;
            }
            _.each($scope.universitiesMaterials.records, function (records) {
                _.each(type, function (type) {
                    if (verify) {
                        return
                    }
                    if (_.isEmpty(records.uploadingFile[type])) {
                        verify = true;
                    }
                })
            });
            if (verify) {
                myTips($scope.application_doc_mytips[5], false);
                return
            }
            myloading();
            $.get('/api/account/docs/submit', function (data, status) {
                myloading();
                myTips($scope.application_doc_mytips[6], true);
                initInstrumentsMaterial();
                initUniversitiesMaterials();
                $scope.backgroundInfo.doc_overall_state = 'Pending';
                setTimeout(function () {
                    $scope.digestScope();
                }, 1000)
            });
        };

        $scope.unfoldAnimate = function (id, id1) {
            if ($scope.unfold.id == id && $scope.unfold.selected) {
                $('#' + id).animate({height: '50px'}, 300);
                $('#' + id + ' .i-unfold').removeClass('an-rotate-180');
                $('#' + id + ' .i-unfold').addClass('an-rotate-0');
                $scope.unfold.selected = false;
                return
            }

            else if ($scope.unfold.selected) {
                $('#' + $scope.unfold.id).animate({height: '50px'}, 300);
                $('#' + $scope.unfold.id + ' .i-unfold').addClass('an-rotate-0');
            }


            $scope.unfold.id = id;
            $scope.unfold.selected = true;
            var height = $('#' + id1).outerHeight() + 50;
            $('#' + id).animate({height: height + 'px'}, 600);
            $('#' + id + ' .i-unfold').removeClass('an-rotate-0');
            $('#' + id + ' .i-unfold').addClass('an-rotate-180');
        };

        $scope.selectOne = function (field, data) {
            if (!_.isEmpty($scope.backgroundInfo[field])) {
                return;
            }

            if (!_.isEmpty($scope.deselectOne.cache) && !_.isEmpty($scope.deselectOne.cache[field])) {
                $scope.backgroundInfo[field] = $scope.deselectOne.cache[field];
                return;
            }

            $scope.backgroundInfo[field].push(data);
        };

        $scope.deselectOne = function (field) {
            if (_.isEmpty($scope.deselectOne.cache)) {
                $scope.deselectOne.cache = {};
            }

            $scope.deselectOne.cache[field] = $scope.backgroundInfo[field];
            $scope.backgroundInfo[field] = [];
        };

        $scope.addOne = function (field, data) {
            $scope.backgroundInfo[field].push(data);
        };

        $scope.reduceOne = function (field, index) {
            $scope.backgroundInfo[field].splice(index, 1);
        };

        $scope.isEmpty = function (o) {
            return _.isEmpty(o);
        };
    })

    .controller('applicationOffer',function ($scope, $window, $http) {
        $scope.init = function () {
            $http.get('/api/account/checklist').success(function (response) {
                $scope.application = response.records;
                $scope.processing = 0;
                $scope.rejected = 0;
                $scope.passed = 0;
                $scope.cancelled = 0;
                _.each($scope.application, function(item) {
                    if(item.stateRaw == 'Processing') {
                        $scope.processing++;
                        return
                    } else if(item.stateRaw == 'Rejected') {
                        $scope.rejected++;
                        return
                    } else if(item.stateRaw == 'Passed') {
                        $scope.passed++;
                        return
                    } else if(item.stateRaw == 'Cancelled') {
                        $scope.cancelled++;
                        return
                    }
                })
            });
        }
    })

    .controller('homeNoticeCtrl', function ($scope, $window, $http) {
        $scope.defaultIndex = 5;
        $scope.init = function() {
            $http.get('/api/account/messagelist?size=' + $scope.defaultIndex).success(function (response) {
                $scope.messages = response.messages;
                $scope.pageCount = parseInt(response.pageCount);
                $scope.pageIndex = parseInt(response.pageIndex);
                $scope.pageSize = parseInt(response.pageSize);

                $scope.paging = [];
                pagingList($scope.pageCount,$scope.pageIndex);
            })
        }

        $scope.pagingList = function(pag) {
            if(pag < 0 || pag > ($scope.pageCount - 1 )) {
                return
            }
            $http.get('/api/account/messagelist?size=' + $scope.defaultIndex + '&page=' + pag ).success(function (response) {
                $scope.messages = response.messages;
                $scope.pageCount = parseInt(response.pageCount);
                $scope.pageIndex = parseInt(response.pageIndex);
                $scope.pageSize = parseInt(response.pageSize);

                $scope.paging = [];
                pagingList($scope.pageCount,$scope.pageIndex);

                $scope.digestScope();
            })
        }

        $scope.digestScope = function () {
            setTimeout(function () {
                try {
                    $scope.$digest();
                }
                catch (error) {
                }
            }, 200);
        };

        $scope.delete = function(item) {
            $http.delete('/api/account/message/' + item._id).success(function (response) {
                $('#' + item._id).addClass('delete');
                setTimeout(function(){
                    $scope.messages = _.without($scope.messages,item);
                    $scope.digestScope();
                },500)
            })
        }

        function pagingList(pageCount,pageIndex) {
            var index = 6;
            var pagingList = [];
            if(index < pageCount) {
                var a = pageIndex + 1;
                var b = 1;
                pagingList.push(a);
                while(index > 0){
                    var c = a - b;
                    var d = a + b;

                    if(c > 0) {
                        pagingList.push(c);
                        index --;
                    }
                    if(d < (pageCount + 1)) {
                        pagingList.push(d);
                        index --;
                    }
                    b ++;
                }
            }
            else{
                for(var i = 1; i < (pageCount + 1); i++) {
                    pagingList.push(i);
                }
            }

            $scope.paging = _.sortBy(pagingList);
        }
        /* 头像 start */
        $http.get('/api/account/accountinfo').success(function (data) {
            $scope.portraitUrl = data.portraitUrl;
        });

        $scope.portraitFileChanged = function () {
            angular.element('#portraitForm').submit();
        }

        $scope.portraitSaved = function () {
            var targetElement = angular.element("#portraitSaved");
            $scope.portraitUrl = targetElement.attr('objectUrl');
        }
        /* 头像 end */
    })

    .controller('homeSuccessfulCtrl', function ($scope, $window, $http) {
        if ($window.location.href.match(/[\/\\]joinus/i)) {
            $scope.navIndex = 1;
        } else if ($window.location.href.match(/[\/\\]partnership/i)) {
            $scope.navIndex = 2;
        } else if($window.location.href.match(/[\/\\]mediaReports/i)) {
            $scope.navIndex = 3;
        } else if($window.location.href.match(/[\/\\]successful/i)){
            $scope.navIndex = 4;
        } else{
            $scope.navIndex = 0;
        }

        $(window).scroll(function(){
            var top = $(window).scrollTop();
            var $mynav=$(".my-usercenter-wrap");
            if(top > 250 && !$mynav.hasClass('scrolltop-active')) {
                $mynav.addClass("scrolltop-active");
            } else if(top < 250 && $mynav.hasClass('scrolltop-active')) {
                $mynav.removeClass("scrolltop-active");
            }
        })

        $scope.sizePage = 10;
        $scope.indexPage = 0;
        $scope.countPage = 1;
        $scope.successfulList = [];
        $scope.caseData;
        $scope.changeImgIndex = 0;

        $scope.digestScope = function () {
            setTimeout(function () {
                try {
                    $scope.$digest();
                }
                catch (error) {
                }
            }, 200);
        };

        $scope.init = function() {
            getSuccesscaseList();
        }

        function getSuccesscaseList() {
            $http.get('/api/successcase?index='+ $scope.indexPage + '&size=' + $scope.sizePage)
            .success(function (response) {
                $scope.addList = response.caseList;
                $scope.countPage = response.count || 0;
                $scope.successfulList = $scope.successfulList.concat($scope.addList);
                $scope.indexPage++;
                addListDom();
                initWaterfallPin();
                setTimeout(function () {
                    waterfall("waterfall","waterfall-pin");
                    clickWaterfallPin();
                    if(($scope.indexPage * $scope.sizePage)< ($scope.countPage)) {
                        return
                    }
                    var successfulDiv=$('.successful-loading div')
                    successfulDiv.attr("disabled",true);
                    successfulDiv.html("到最后啦！");
                }, 200);
            })
        }

        function initWaterfallPin() {
            if($scope.indexPage != 1) {
                return
            }
            var value = GetRequest();
            if(!value.id) {
                return
            }

            $scope.caseData  = _.find($scope.successfulList,function(item, index){
                return item._id == value.id
            })

            $scope.digestScope();
            setTimeout(function () {
                var length = $scope.caseData.offer_image_url.length + 1;
                $('.case-img>div').css({"width": (length*100) +"%"});
                $('.case-img>div').css({"left":"-0%"});
                $('#successful-case').fadeIn();
            },200);
        }

        $scope.changeImg = function(imgIndex) {
            if($scope.changeImgIndex == imgIndex) {
                return
            }
            $scope.changeImgIndex = imgIndex;
            $('.case-img>div').css({"left":"-" + (imgIndex*100) +"%"});
        }

        $scope.uploading = function() {
            if(!(($scope.indexPage * $scope.sizePage) < $scope.countPage)) {
                return;
            }
            getSuccesscaseList();
        }

        function waterfall(parent,pin){
             var oParent=document.getElementById(parent);
             var aPin=getClassObj(oParent,pin);
             var iPinW=aPin[0].offsetWidth;
             var num=Math.floor(oParent.offsetWidth/iPinW);

             var pinHArr=[];
             for(var i=0;i<aPin.length;i++){
                 var pinH=aPin[i].offsetHeight;
                 if(i<num){
                     pinHArr[i]=pinH;
                 }else{
                     var minH=Math.min.apply(null,pinHArr);
                     var minHIndex=getminHIndex(pinHArr,minH);
                     aPin[i].style.position='absolute';
                     aPin[i].style.top=minH+'px';
                     aPin[i].style.left=aPin[minHIndex].offsetLeft+'px';
                     pinHArr[minHIndex]+=aPin[i].offsetHeight;
                 }
             }
             var mxnH=Math.max.apply(null,pinHArr);
             oParent.style.cssText='min-height:'+ (mxnH + 30) +'px';
        }

        function getClassObj(parent,className){
             var obj=parent.getElementsByTagName('*');
             var pinS=[];
             for (var i=0;i<obj.length;i++) {
                 if (obj[i].className==className){
                     pinS.push(obj[i]);
                 }
             };
             return pinS;
        }

        function getminHIndex(arr,minH){
             for(var i in arr){
                 if(arr[i]==minH){
                     return i;
                 }
             }
        }

        function addListDom() {
            var oParent=document.getElementById('waterfall');
            var dataPage = ($scope.indexPage - 1)*$scope.sizePage;
            for(var i=0;i<$scope.addList.length;i++){

                 var oPin=document.createElement('div');
                 oPin.className='waterfall-pin';
                 oPin.setAttribute('data-index',dataPage+i);

                 var oBox=document.createElement('div');
                 oBox.className='wp-box';
                 oPin.appendChild(oBox);

                 var oImgDiv=document.createElement('div');
                 oImgDiv.className='wp-img';
                 oBox.appendChild(oImgDiv);

                 var oImg=document.createElement('img');
                 oImg.src=$scope.addList[i].post_image_url;
                 oImgDiv.appendChild(oImg);

                 var body =document.createElement('div');
                 oBox.appendChild(body);

                 var title = document.createElement('div');
                 title.className='title';
                 var titleText = document.createTextNode("申请人：" + $scope.addList[i].applicant_name);
                 title.appendChild(titleText);

                 body.appendChild(title);
                 var subhead = document.createElement('div');
                 var subheadText = document.createTextNode("最终选择OFFER：" + $scope.addList[i].choice_offer);
                 subhead.appendChild(subheadText);

                 body.appendChild(subhead);

                 oParent.appendChild(oPin);
             }
        }

        $scope.caseClose = function() {
            $('#successful-case').fadeOut();
        }

        function clickWaterfallPin() {
            $(".waterfall-pin").click(function(){
                var dataIndex = $(this).data('index');
                $scope.changeImgIndex = 0;
                $scope.caseData = $scope.successfulList[dataIndex];
                $scope.digestScope();
                setTimeout(function () {
                    var length = $scope.caseData.offer_image_url.length + 1;
                    $('.case-img>div').css({"width": (length*100) +"%"});
                    $('.case-img>div').css({"left":"-0%"});
                    $('#successful-case').fadeIn();
                },200);
            })
        }
    })

    .controller('applyCtrl', function ($scope, $window, $http) {
        $scope.selectedCourses = {};
        $scope.selectedCoursesCount = 0;

        $scope.favorite_universities = [];
        $scope.appliedUniversitises = [];
        $scope.recommendations = [];
        $scope.countries = [];
        $scope.dateList = dateList;
        $scope.gradeList = [];
        $scope.universityScores = universityScores;
        $scope.ieltsScores = getIELTScores();
        $scope.subjectAreas = [];

        $scope.applyDegreePrompt = '';

        $scope.searchResult_country_aus = searchResult_country_aus;

        var lang = getLanguageByUrl() || defaultLanguage;

        $scope.changeTab = function (index) {
            $scope.tabIndex = index;
            if (index == 1) {
                getFavorites();
            }
            else if (index == 2) {
                getApplies();
            }
        };

        $scope.tabIndex = 0;

        $scope.sourceCountry = [];

        $scope.applyDegreeList = [];

        $http.get('/docs/' + lang + '/sourceCountry.json').success(function (response) {
            $scope.sourceCountry = response;
        });

        $scope.agreementTrue = function () {
            $scope.agreement = !$scope.agreement;
        };

        function getApplies() {
            $http.get('/api/account/applies').success(function (response) {
                $scope.appliedUniversitises = response;

                angular.forEach($scope.appliedUniversitises, function (u) {
                    u.selected = $scope.selectedCourses[u._id];
                });
            });
        }

        function getFavorites() {
            $http.get('/api/account/favorites').success(function (data) {
                $scope.favorite_universities = data;
            });
        }

        $scope.load = function () {
            myloading();
            getApplies();

            $http.get('/api/account/evaluate').success(function (response) {
                $scope.evaluationdata = response;

                $scope.evaluationdata_state = false;
                for (var property in response) {
                    if (property != 'result') {
                        $scope.evaluationdata_state = true;
                        break;
                    }
                }

                var lang = getLanguageByUrl() || defaultLanguage;

                $http.get('/api/doc/evaluationData').success(function (response) {
                    response.subjects.forEach(function (subjectArea) {
                        $scope.subjectAreas.push(subjectArea);
                    });

                    response.countries.forEach(function (country) {
                        $scope.countries.push(country);
                    });

                    response.grades.forEach(function (grade) {
                        $scope.gradeList.push(grade);
                    });

                    function preProecessData(data) {
                        for (var property in data) {
                            if (data[property]) {
                                if (property == 'subject' || property == 'apply' || property == 'des_country' || property == 'grade') {
                                    data[property] = parseInt(data[property]);
                                }
                                else if (property == 'score') {
                                    for (var i = 0; i < $scope.universityScores.length; i++) {
                                        if ($scope.universityScores[i].value == data[property]) {
                                            data[property] = $scope.universityScores[i];
                                            break;
                                        }
                                    }
                                }
                                else if (property == 'ielts_avg' || property == 'ielts_low') {
                                    data[property] = parseFloat(data[property]);
                                }
                            }
                        }
                    }

                    // pre-process application data and evaluation data.
                    $http.get('/api/account/applicationdata').success(function (response) {
                        $scope.applicationdata = response;

                        if (!$scope.applicationdata.source_country) {
                            if (lang == 'zh-cn') {
                                $scope.applicationdata.source_country = 101;
                            } else if (lang == 'en') {
                                $scope.applicationdata.source_country = 100;
                            }
                        }

                        $scope.applicationdata_state = response.state;

                        preProecessData($scope.evaluationdata);
                        preProecessData($scope.applicationdata);
                        myloading();
                    });
                });

                // init autocomplete plugin
                $http.get('/docs/' + lang + '/culist.json').success(function (response) {
                    $('#evaluation_university').typeahead({
                        'source': response
                    });

                    $('#applicationdata_university').typeahead({
                        'source': response
                    });
                });

                if ($scope.evaluationdata_state) {
                    getRecommendations();
                }
            });

            getFavorites();

            // user may add new courses into the cart.
            $('#subjectModal').on('hidden.bs.modal', function () {
                getApplies();
            });
        }

        function getRecommendations() {
            $http.get('/api/university/recommendations').success(function (response) {
                $scope.recommendations = response.recommendations;
            });
        }

        $scope.saveEvaluationData = function (valid) {
            if (valid) {
                myloading();
                var postData = {};

                for (var property in $scope.evaluationdata) {
                    var item = $scope.evaluationdata[property];
                    if (property == 'score') {
                        postData[property] = item.value;
                    }
                    else {
                        postData[property] = item;
                    }
                }

                $http.post('/api/account/evaluate', {
                    'des_country': postData.des_country,
                    'target_date': postData.target_date,
                    'grade': postData.grade,
                    'university': postData.university,
                    'subject': postData.subject,
                    'score': postData.score,
                    'ielts_avg': postData.ielts_avg,
                    'ielts_low': postData.ielts_low,
                    'apply': postData.apply
                }).success(function (response) {
                    $scope.evaluationdata_state = true;
                    getRecommendations();
                    myloading();
                });
            }
        }

        $scope.editEvaluationData = function () {
            $scope.evaluationdata_state = false;
        };

        $scope.removeApply = function (apply, applyIndex, universityIndex) {
            $http.post('/api/account/unapply', {'ids': apply.course_id}).success(function () {
                $scope.appliedUniversitises[universityIndex].applies.splice(applyIndex, 1);

                if ($scope.selectedCourses[$scope.appliedUniversitises[universityIndex]._id] == apply._id) {
                    delete $scope.selectedCourses[$scope.appliedUniversitises[universityIndex]._id];
                    $scope.selectedCoursesCount = Object.getOwnPropertyNames($scope.selectedCourses).length;
                }
            });
        }

        $scope.removeApplyByUniversity = function (university, universityIndex) {
            $http.post('/api/account/unapply', {'uIds': university._id}).success(function () {
                angular.forEach($scope.favorite_universities, function (fU) {
                    if (fU._id == university._id) {
                        fU.in_cart = false;
                    }
                });

                angular.forEach($scope.recommendations, function (recommendation) {
                    angular.forEach(recommendation, function (rU) {
                        if (rU._id == university._id) {
                            rU.in_cart = false;
                        }
                    });
                });

                delete $scope.selectedCourses[university._id];
                $scope.selectedCoursesCount = Object.getOwnPropertyNames($scope.selectedCourses).length;

                $scope.appliedUniversitises.splice(universityIndex, 1);
            });
        };

        $scope.courseSelectChange = function (appliedUniversity, apply, index, event) {
            event = event || window.event;

            structureApplyDegree(); //提交学位列表收集

            function structureApplyDegree() {
                var applyDegree = _.find($scope.applyDegreeList, function (item) {
                    return item._id == apply._id;
                });

                if (_.isEmpty(applyDegree)) {
                    _.each($scope.applyDegreeList, function (item) {
                        if (item.university_id == apply.university_id) {
                            item.status = false;
                        }
                    });

                    $scope.applyDegreeList.push({
                        _id: apply._id,
                        level: apply.level,
                        university: apply.university,
                        university_id: apply.university_id,
                        status: true
                    });
                }
                else {
                    if (applyDegree.status) {
                        applyDegree.status = false;
                        return
                    }
                    applyDegree.status = true;
                }
            }

            if (!$scope.selectedCourses[appliedUniversity._id] || $scope.selectedCourses[appliedUniversity._id] != apply._id) {
                $scope.selectedCourses[appliedUniversity._id] = apply._id;
            }
            else {
                delete $scope.selectedCourses[appliedUniversity._id];
                $('#' + apply._id).prop('checked', false)
                event.preventDefault();
            }

            $scope.selectedCoursesCount = Object.getOwnPropertyNames($scope.selectedCourses).length;
        }

        $scope.upsertApplicationData = function () {
            $http.post('/api/account/applicationdata', {
                'applicationData': $scope.applicationdata
            }).success(function () {
                $scope.applicationdata_state = true;
            });
        };

        function checkDegree() {
            // gradesList
            var grades = [
                {"id": 101, "name": "本科大四"},
                {"id": 102, "name": "本科大三"},
                {"id": 103, "name": "大专大三"},
                {"id": 104, "name": "大专大二"},
                {"id": 105, "name": "高三"},
                {"id": 106, "name": "高二"},
                {"id": 107, "name": "高一"},
                {"id": 108, "name": "初三"},
                {"id": 109, "name": "初二"},
                {"id": 110, "name": "初一"},
                {"id": 111, "name": "硕士毕业已工作"},
                {"id": 112, "name": "硕士在读"},
                {"id": 113, "name": "本科毕业已工作"},
                {"id": 114, "name": "本科大二"},
                {"id": 115, "name": "本科大一"},
                {"id": 116, "name": "大专毕业三年及以上"},
                {"id": 117, "name": "大专大一"},
                {"id": 118, "name": "高三毕业已工作"}
            ];
            //bachelor 
            var authBachelor = [
                101,//本科大四
                102,//本科大三
                103,//大专大三
                104,//大专大二
                105,//高三"},
                106,//高二"},
                111,//硕士毕业已工作
                112,//硕士在读
                113,//本科毕业已工作
                114,//本科大二
                115,//本科大一
                116,//大专毕业三年及以上
                117,//大专大一
                118,//高三毕业已工作
            ];
            // master
            var authMaster = [
                101,//本科大四
                111,//硕士毕业已工作
                112,//硕士在读
                113,//本科毕业已工作
                116,//大专毕业三年及以上
            ];


            var levelBachelor = _.find($scope.applyDegreeList, function (degree) {
                return (degree.level == 'Bachelor' || degree.level == '本科') && degree.status;
            });

            var levelMaster = _.find($scope.applyDegreeList, function (degree) {
                return (degree.level == 'Master' || degree.level == '硕士') && degree.status;
            });

            if (!_.isEmpty(levelBachelor)) {
                if (!_.contains(authBachelor, $scope.applicationdata.grade)) {
                    $scope.applyDegreePrompt = applyDegreePrompt_2;
                    $('.my-dialog').fadeIn();
                    return
                }
                doCheckIn();
            }

            else {
                if (!_.contains(authMaster, $scope.applicationdata.grade)) {
                    $scope.applyDegreePrompt = applyDegreePrompt_1;
                    if ($scope.applicationdata.source_country == 100) {
                        $scope.applyDegreePrompt = applyDegreePrompt_3;
                    }
                    $('.my-dialog').fadeIn();
                    return
                }
                doCheckIn();
            }
        }

        $scope.continueDoCheckIn = function () {
            doCheckIn();
        };

        $scope.myDialogClose = function () {
            $('.my-dialog').fadeOut();
        };

        function doCheckIn() {
            var courseIds = [];

            for (var property in $scope.selectedCourses) {
                courseIds.push($scope.selectedCourses[property]);
            }

            if (courseIds.length > 0) {
                $http.post('/api/account/checkin', {
                    'courseIds': courseIds
                }).success(function () {
                    $('#apply_success').modal('show');//确认进入下一步                                        
                }).error(function(error){
                    alert(error.error);
                });
            }
        }

        $scope.checkIn = function () {
            if ($scope.selectedCoursesCount > 0) {
                if (!$scope.applicationdata_state) {
                    $('#applicationDataModal').modal('show');
                }
                else {
                    checkDegree();
                }
            }
        }

        $scope.saveApplicationData = function (valid) {
            if (valid) {
                $('#applicationDataModal').modal('hide');

                var postData = {};

                for (var property in $scope.applicationdata) {
                    var item = $scope.applicationdata[property];
                    if (property == 'score') {
                        postData[property] = item.value;
                    }
                    else {
                        postData[property] = item;
                    }
                }

                $http.post('/api/account/applicationdata', {
                    'applicationData': postData
                }).success(function () {
                    $scope.applicationdata_state = true;
                    $('#applicationDataModal').modal('hide');
                    checkDegree();
                });
            }
        }

        $scope.showSubjectModal = function (university) {
            $('#uId').val(university._id);
            $('#uName').val(university.name);
            $('#uOfficialName').val(university.official_name);
            $('#uLogo').val(university.logo);

            $('#subjectModal').modal('show');
        }

        $scope.addToCart = function (university) {
            myJudgePhone(function(){
                $http.post('/api/account/apply', {
                    'uid': university._id
                }).success(function () {
                    showOperationResult(null, cart_success);
                    university.in_cart = true;

                    getApplies();
                });
            })
        }

        $scope.favorite = function (university) {
            if (university.favorited) {
                $http.get('/api/account/unfavorite/' + university._id).success(function () {
                    university.favorited = false;

                    var tmp = [];
                    angular.forEach($scope.favorite_universities, function (u) {
                        if (u._id != university._id) {
                            tmp.push(u);
                        }
                    });

                    $scope.favorite_universities = tmp;
                });
            }
            else {
                $http.get('/api/account/favorite/' + university._id).success(function () {
                    university.favorited = true;

                    $scope.favorite_universities.push(university);
                });
            }
        }

        $scope.removeFavorite = function (index) {
            var toBeRemoved = $scope.favorite_universities[index]._id;

            $http.get('/api/account/unfavorite/' + toBeRemoved).success(function () {
                $scope.favorite_universities.splice(index, 1);
            });

            angular.forEach($scope.recommendations, function (recommendation) {
                angular.forEach(recommendation, function (u) {
                    if (u._id == toBeRemoved) {
                        u.favorited = false;
                    }
                });
            });
        }
    })

    .controller('subjectCtrl', function ($scope, $window, $http) {
        $scope.levels = university_levels;
        $scope.selectedArea = university_total;
        $scope.selectedLevel = university_total;

        $scope.load = function () {
            var onCoursesLoad = function (courses, count, pageIndex, pageCount) {
                $scope.courses = courses;
                $scope.count = count;
                $scope.pageIndex = parseInt(pageIndex, 10);
                $scope.pageCount = pageCount;

                $scope.pages = getPages($scope.pageIndex, $scope.pageCount);

                // set the selected property.
                for (var i = 0; i < $scope.courses.length; i++) {
                    if ($scope.selectedCourses[$scope.courses[i]._id]) {
                        $scope.courses[i].selected = true;
                    }
                }
            }

            var getCourses = function (pageIndex) {
                var area = $scope.selectedArea == university_total ? null : $scope.selectedArea;
                var level = $scope.selectedLevel == university_total ? null : $scope.selectedLevel;

                var url = '/api/university/' + $scope.university_id + '/courses?size=5';

                if (area || level || pageIndex || $scope.course_search_text) {
                    if (area) {
                        url += '&area=' + area;
                    }

                    if (level) {
                        url += '&level=' + level;
                    }

                    if (pageIndex) {
                        url += '&page=' + pageIndex;
                    }

                    if ($scope.course_search_text) {
                        url += '&text=' + encodeURIComponent($scope.course_search_text);
                    }
                }

                $http.get(url)
                    .success(function (response) {
                        onCoursesLoad(response.courses, response.count, response.pageIndex, response.pageCount);
                    });
            }

            $scope.searchCourse = function () {
                getCourses(0);
            }

            $scope.onCourseSearchKeyDown = function (event) {
                if (event.keyCode == 13) {
                    $scope.searchCourse();
                }
            }

            $scope.onCheckCourse = function (index) {
                if ($scope.courses[index].selected) {
                    $scope.selectedCoursesCount++;
                    $scope.selectedCourses[$scope.courses[index]._id] = true;
                }
                else {
                    $scope.selectedCoursesCount--;
                    $scope.selectedCourses[$scope.courses[index]._id] = false;
                }
            }

            // parent should add listener on modal hidden event.
            $scope.addToCart = function () {
                var courseIds = [];

                for (var courseId in $scope.selectedCourses) {
                    if ($scope.selectedCourses[courseId]) {
                        courseIds.push(courseId);
                    }
                }

                if (courseIds.length > 0) {
                    $http.post('/api/account/apply/', {
                        'id': courseIds
                    }).success(function (response) {
                        for (var i = 0; i < $scope.courses.length; i++) {
                            if ($scope.selectedCourses[$scope.courses[i]._id]) {
                                $scope.courses[i].applied = true;
                            }
                        }

                        $scope.selectedCourses = {};
                        $scope.selectedCoursesCount = 0;
                        $('#subjectModal').modal('hide');
                    });
                }
            }

            $scope.jump = function (page) {
                getCourses(page);
            }

            $scope.selectArea = function (index) {
                $scope.selectedArea = $scope.areas[index];

                getCourses(0);
            }

            $scope.selectLevel = function (index) {
                $scope.selectedLevel = $scope.levels[index];

                getCourses(0);
            }

            $('#subjectModal').on('shown.bs.modal', function () {
                $scope.university_id = $('#uId').val();
                $scope.university_name = $('#uName').val();
                $scope.university_official_name = $('#uOfficialName').val();
                $scope.university_logo = $('#uLogo').val();

                $scope.selectedCourses = {};
                $scope.selectedCoursesCount = 0;
                $scope.course_search_text = null;

                // load the courses.
                getCourses(0);
            });

            var lang = getLanguageByUrl() || defaultLanguage;
            $http.get('/docs/' + lang + '/subjects.json').success(function (response) {
                $scope.areas = [university_total];
                $scope.subjectOptions = [];
                angular.forEach(response, function (subjectItem) {
                    $scope.areas.push(subjectItem.name);
                    $scope.subjectOptions.push(subjectItem.name);
                });
            });
        }
    })

    .controller('accountHeaderCtrl', function ($scope, $window) {
        if ($window.location.href.match(/[\/\\]account[\/\\]profile/i)) {
            $scope.navIndex = 1;
        } else if ($window.location.href.match(/[\/\\]account[\/\\]application/i)) {
            $scope.navIndex = 2;
        } else if ($window.location.href.match(/[\/\\]account[\/\\]favorites/i)) {
            $scope.navIndex = 3;
        } else if ($window.location.href.match(/[\/\\]account[\/\\]recommendations/i)) {
            $scope.navIndex = 4;
        } else {
            $scope.navIndex = 0;
        }
    })

    .controller('usHeaderCtrl', function ($scope, $window) {
        if ($window.location.href.match(/[\/\\]joinus/i)) {
            $scope.navIndex = 1;
        } else if ($window.location.href.match(/[\/\\]partnership/i)) {
            $scope.navIndex = 2;
        } else {
            $scope.navIndex = 0;
        }
    })

    .controller('userHeaderCtrl',function($scope,$window){
        $scope.aboutus=function(){
            if($("#aboutus").hasClass('active')){
                return false;
            }else{
                $window.location.href="/aboutus";
            }
        }
        $scope.joinus=function() {
            if ($("#joinus").hasClass('active')) {
                return false;
            } else {
                $window.location.href = "/joinus";
            }
        }
        $scope.partnership=function() {
            if ($("#partnership").hasClass('active')) {
                return false;
            } else {
                $window.location.href = "/partnership";
            }
        }
        $scope.mediareport=function() {
            if ($("#mediareport").hasClass('active')) {
                return false;
            } else {
                $window.location.href = "/mediaReports";
            }
        }
        $scope.successful=function() {
            if ($("#successful").hasClass('active')) {
                return false;
            } else {
                $window.location.href = "/successful";
            }
        }



        if ($window.location.href.match(/[\/\\]joinus/i)) {
            $scope.navIndex = 1;


        } else if ($window.location.href.match(/[\/\\]partnership/i)) {
            $scope.navIndex = 2;


        } else if($window.location.href.match(/[\/\\]mediaReports/i)) {
            $scope.navIndex = 3;

        } else if($window.location.href.match(/[\/\\]successful/i)){
            $scope.navIndex = 4;

        } else{
            $scope.navIndex = 0;

        }


    })



    .controller('accountResetCtrl', function ($scope, $window, $http, $interval) {
        $scope.vcode = {};
        var codeTimer = {};

        $scope.sendVCode = function (event) {
            var event = event || window.event;
            var target = $(event.target);

            if (target.attr('disabled') == 'disabled') {
                return;
            }

            target.attr('disabled', 'disabled');
            target.css('background-color', 'gray');
            target.css('color', 'white')
            target.text(mobile_sent);
            codeTimer.target = target;
            codeTimer.time = 59;
            codeTimer.timer = $interval(function () {
                codeTimer.target.text(mobile_sent + '(' + codeTimer.time-- + ')');
                if (codeTimer.time <= 0) {
                    $interval.cancel(codeTimer.timer);
                    codeTimer.target.removeAttr('style');
                    codeTimer.target.removeAttr("disabled");
                    codeTimer.target.text(mobile_send_vcode);
                }
            }, 1000);

            if ($scope.target) {
                $http.post('/api/vcode', {
                    'code_type': 'reset',
                    'target': $scope.target
                }).success(function (response) {
                    $scope.vcode.id = response.id;
                    showOperationResult(null, mobile_vcode_sent);
                }).error(function (response) {
                    $scope.error = response.error;
                });
            }
        }

        $scope.submit = function (valid) {
            if (valid) {
                $http.post('/api/account/resetpassword', {
                    'id': $scope.vcode.id,
                    'vcode': $scope.vcode.code,
                    'target': $scope.target,
                    'new_password': $scope.new_password,
                    'new_repassword': $scope.new_repassword
                }).success(function (response) {
                    showOperationResult(null, account_password_reset_success, function () {
                        $window.location.href = getLocalizedUrl('/account/login');
                    });
                }).error(function (response) {
                    $scope.error = response.error;
                });
            }
        }
    })

    .controller('articleSearchCtrl', function ($scope, $window) {
        function search(text) {
            var querystring = '?text=' + encodeURIComponent(text);

            $window.location.href = getLocalizedUrl('/article/search.html') + querystring;
        }

        $scope.load = function () {
            $('#articleSearchInput').keydown(function (event) {
                var target = null;

                event = event || window.event

                target = event.srcElement || event.target;

                if (event.keyCode == 13 && target.value && target.value != '') {
                    search(target.value);
                }
            });

            var querystring = $window.location.search;
            if (querystring) {
                querystring.split('&').forEach(function (item) {
                    var words = item.split('=');
                    if (words[0] == 'text' || words[0] == '?text') {
                        $scope.text = decodeURIComponent(words[1]);
                    }
                });
            }
        };

        $scope.search = function () {
            if ($scope.text && $scope.text != '') {
                search($scope.text);
            }
        }
    })

    .controller('sendFeedbackCtrl', function ($scope, $http, $timeout) {
        $scope.feedback_type_list = feedback_type_list;

        $scope.feedbackType = '';
        $scope.feedback = '';
        $scope.message = '';
        $scope.contact = '';
        $scope.feedData = {
            issue_types: [],
            mobile_codes: [],
            prefer_time: []
        }

        $scope.postData = {
            type: 0,
            mobile_code_id: 0,
            prefer_time_id: 0,
            phone: null,
            content: null
        }

        $scope.digestScope = function () {
            setTimeout(function () {
                try {
                    $scope.$digest();
                }
                catch (error) {
                }
            }, 200);
        };
        var lang = getLanguageByUrl() || defaultLanguage;

        $http.get('/api/consultingoptions').success(function (response) {
            $scope.feedData = response;
            $scope.digestScope();
        }).error(function (response) {
            myTips('查询失败',false);
        });

        var dataVerify = [
            {
               id:'home-phone-number',
               verify: {
                    required: true,
                    minlength: 10,
                    maxlength: 11
               },
               messages: {
                   required:login_tips[16],
                   minlength:"手机号码太短了！",
                   maxlength:"手机号码太长了！"
               }
           },
           {
                id:'home-question-body',
                verify:{
                    required: true
                },
                messages: {
                    required:login_tips[15]
                }
           }
        ]

        myVerifyChange(dataVerify);

        $scope.dialogQuestionShow = function() {
            $scope.postData = {
                type: 0,
                mobile_code_id: 0,
                prefer_time_id: 0,
                phone: null,
                content: null
            }
            $('#home-consult-dialog').show();
            $('#home-consult-success').hide();
            $('#home-callback-dialog').fadeIn();
        }

        $scope.send = function (valid) {
            if (!valid) {
                return;
            }

            $scope.message = feedback_messages[0];

            $http.post('/api/message', {
                source: 'tucao',
                target: 'Chain',
                type: $scope.feedbackType,
                email: $scope.contact,
                full_name: 'tucao',
                content: $scope.feedback
            }).success(function () {
                $scope.message = feedback_messages[1];
                setTimeout(function () {
                    // $('#feedbackModal').modal('hide');
                    $('#home-send-feedback-dialog').fadeOut();
                    $scope.feedback = '';
                }, 500);
            });
        }

        $scope.questionSumit = function() {
            var status = myVerify(dataVerify);
            if(!status) {
                return
            }

            $http.post('/api/consultancy',$scope.postData).success(function (response) {
                $('#home-consult-dialog').hide();
                $('#home-consult-success').fadeIn();
            }).error(function (response) {
                myTips('提交失败',false);
            });
        }
    })

    .controller('evaluateModalCtrl', function ($scope, $http, $timeout) {
        $scope.init = function () {
            $scope.evaluation = {};

            $scope.dateList = dateList;

            $scope.universityScores = universityScores;
            $scope.ieltsScores = getIELTScores();

            $scope.countries = [];
            $scope.gradeList = [];
            $scope.subjectAreas = [];

            $scope.myEvaluateModelVerify = [
                {
                    id: 'myEvaluateModal-country',
                    verify: {
                        required: true
                    }
                },
                {
                    id: 'myEvaluateModal-target_date',
                    verify: {
                        required: true
                    }
                },
                {
                    id: 'myEvaluateModal-university',
                    verify: {
                        required: true
                    }
                },
                {
                    id: 'myEvaluateModal-apply',
                    verify: {
                        required: true
                    }
                },
                {
                    id: 'myEvaluateModal-grade',
                    verify: {
                        required: true
                    }
                },
                {
                    id: 'myEvaluateModal-subject',
                    verify: {
                        required: true
                    }
                },
                {
                    id: 'myEvaluateModal-score',
                    verify: {
                        required: true
                    }
                },
                {
                    id: 'myEvaluateModal-ielts_avg',
                    verify: {
                        required: true
                    }
                },
                {
                    id: 'myEvaluateModal-ielts_low',
                    verify: {
                        required: true
                    }
                }
            ]

            evaluationData();
        }

        function evaluationData() {
            $http.get('/api/doc/evaluationData').success(function (response) {
                $scope.subjectAreas = response.subjects;
                $scope.countries = response.countries;
                $scope.gradeList = response.grades;
                $http.get('/api/account/evaluate').success(function (response) {
                    if (response) {
                        for (var property in response) {
                            if (response[property]) {
                                if (property == 'subject' || property == 'apply' || property == 'des_country' || property == 'grade') {
                                    $scope.evaluation[property] = parseInt(response[property]);
                                }
                                else if (property == 'score') {
                                    for (var i = 0; i < $scope.universityScores.length; i++) {
                                        if ($scope.universityScores[i].value == response[property]) {
                                            $scope.evaluation[property] = $scope.universityScores[i];
                                            break;
                                        }
                                    }
                                }
                                else if (property == 'ielts_avg' || property == 'ielts_low') {
                                    $scope.evaluation[property] = parseFloat(response[property]);
                                }
                                else {
                                    $scope.evaluation[property] = response[property];
                                }
                            }
                        }
                    }
                })
            })
        }

        $scope.evaluateModalSubmit = function() {
            myJudgePhone(function(){
                if(!myVerify($scope.myEvaluateModelVerify)) {
                    return
                }
                var querystring = '';
                for (var property in $scope.evaluation) {
                    var item = $scope.evaluation[property];
                    if (property == 'score') {
                        item = item.value;
                    }

                    querystring += property + '=' + encodeURIComponent(item) + '&';
                }
                myModalHide('#my-evaluate-modal');
                window.open(getLocalizedUrl('/account/recommendations?') + querystring);
            })
        }

        $scope.myEvaluateModalClose = function() {
            myModalHide('#my-evaluate-modal',myVerifyHide($scope.myEvaluateModelVerify));
        }
    })

    .controller('loginModalCtrl', function ($scope, $http, $timeout) {
        $scope.init = function() {
            $scope.login_tips = login_tips || ['手机号码是必填的哦!','你见过这么短的手机号码吗？','手机号码太长了，我记不住。','密码是必填的哦!','密码太短，不安全','密码太长，我怕你忘记了','两次密码都不一样，你是逗我吗？','验证码是必填的哦！','我发给你的验证码没那么短！','我发给你的验证码没那么长！','不填写手机号码怎么登录？','你的密码没这么短哦！','你的密码没这么长哦！','邮箱格式不对哦！','手机号码没有0开头的哦！']
            $scope.myLoginModalVerify = [
                {
                    id: 'myLoginModel-user',
                    verify: {
                        required: true
                    },
                    messages: {
                        required: login_tips[10],
                    }
                },
                {
                    id: 'myLoginModel-password',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 16
                    },
                    messages: {
                        required: login_tips[3],
                        minlength: login_tips[11],
                        maxlength: login_tips[12]
                    }
                }
            ]

            myVerifyChange($scope.myLoginModalVerify);
        }

        $scope.myLoginModalClose = function() {
            myModalHide('#my-login-modal',myVerifyHide($scope.myLoginModalVerify));
        }

        $scope.myLoginModelLogin = function() {
            if (!myVerify($scope.myLoginModalVerify)) {
                return
            }

            var regr = /^[0-9]*$/;
            if (!regr.test($('#myLoginModel-user').val())) {
                var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                if (!reg.test($('#myLoginModel-user').val())) {
                    myVerifyShow('login-user', login_tips[13]);
                    return
                }
            } else {
                if ($('#myLoginModel-user').val()[0] == '0') {
                    myVerifyShow('myLoginModel-user', login_tips[14]);
                    return
                }
                else if ($('#myLoginModel-user').val().length < 10) {
                    myVerifyShow('myLoginModel-user', login_tips[1]);
                    return
                }
                else if ($('#myLoginModel-user').val().length > 11) {
                    myVerifyShow('myLoginModel-user', login_tips[2]);
                    return
                }
            }

            var data = {
                'username': $('#myLoginModel-user').val(),
                'password': $('#myLoginModel-password').val(),
                'rm': true
            };

            $http.post('/api/account/login', data).success(function (response) {
                var redirect = $('#my-login-modal + input#login-redirect').val();
                if (redirect) {
                    location.href = redirect;
                    return;
                }

                history.go(0);
            }).error(function (response) {
                myVerifyShow('myLoginModel-password', response.error);
            })
        }
    })

    .controller('replenishModelCtrl', function($scope, $http, $timeout) {
        $scope.init = function() {
            $scope.replenish_mobile_code = 86;
            $scope.replenishVerify = [
                {
                    id: 'replenish-phonenumber',
                    verify: {
                        required: true,
                        minlength: 10,
                        maxlength: 11,
                        blank: true,
                        isNumber: true
                    },
                    messages: {
                        required: "这是必填的哦！",
                        minlength: "你见过这么短的手机号码吗？",
                        maxlength: "手机号码太长，我记不住。",
                        blank: "不能含空格哦！",
                        isNumber: "手机号码格式不对哦！"
                    }
                },
                {
                    id: 'replenish-code',
                    verify: {
                        required: true,
                        minlength: 6,
                        maxlength: 6,
                        blank: true,
                        isNumber: true
                    },
                    messages: {
                        required: "这是必填的哦！",
                        minlength: "我发给你的验证码没那么短!",
                        maxlength: "我发给你的验证码没那么长！",
                        blank: "不能含空格哦！",
                        isNumber: "验证码号码格式不对哦！"
                    }
                }
            ]
            myVerifyChange($scope.replenishVerify);
        }

        $scope.replenishClose = function() {
            $scope.replenish_phonenumber = null;
            $scope.replenish_code = null;
            myVerifyHide($scope.replenishVerify);
            $('#replenish-page').hide();
        }

        $scope.replenishSubmit = function(callback) {
            if(!myVerify($scope.replenishVerify)) {
                return
            }

            $http.post('/api/account/updatephonenumber', {
                accountInfo:{
                    'phonenumber': $scope.replenish_phonenumber,
                    'vcode': {
                        'target': $scope.replenish_phonenumber,
                        'code': parseInt($scope.replenish_code)
                    },
                },
                'mobile_code': parseInt($scope.replenish_mobile_code)
            }).success(function (returnData) {
                $('#replenish-page').hide();
                $('#account-phonenumber').data('phonenumber',true);
                callback();
            }).error(function (data) {
                if(data['error'].indexOf("号") != -1) {
                    myVerifyShow('replenish-phonenumber',data['error']);
                } else if(data['error'].indexOf("验证码") != -1) {
                    myVerifyShow('replenish-code',data['error']);
                }
            });
        }

        $scope.sendVCode = function() {
            var verify = [
                {
                    id: 'replenish-phonenumber',
                    verify: {
                        required: true,
                        minlength: 10,
                        maxlength: 11,
                        blank: true,
                        isNumber: true
                    },
                    messages: {
                        required: "这是必填的哦！",
                        minlength: "你见过这么短的手机号码吗？",
                        maxlength: "手机号码太长，我记不住。",
                        blank: "不能含空格哦！",
                        isNumber: "手机号码格式不对哦！"
                    }
                }
            ];
            if(!myVerify(verify)) {
                return
            }

            var data = {
                phonenumber : $scope.replenish_phonenumber,
                mobile_code : $scope.replenish_mobile_code,
                code_type: 'phone'
            };

            $http.post('/api/vcode/', data).success(function (returnData) {
                myAuthCode('replenish-code-bt');
            }).error(function (data) {
                alert('验证码发送失败')
            });
        }

        var myAuthCodeStatus = null;

        function myAuthCode(id) {
            if(myAuthCodeStatus != null) {
                return
            }
            myAuthCodeReciprocal(60);
            function myAuthCodeReciprocal(code) {
                myAuthCodeStatus = setTimeout(function(){
                    var i = code;
                    $('#' + id).addClass('disabled');
                    $('#' + id).text(i + "s");
                    i--;
                    if(i < 0) {
                        $('#' + id).text("重新发送");
                        myAuthCodeStatus = true;
                        $('#' + id).removeClass('disabled');
                        myAuthCodeStatus = null;
                        return
                    }
                    myAuthCodeReciprocal(i);
                },1000);
            }
        }
    })

    .controller('courseEditorCtrl', function ($scope, $http) {
        $scope.courses = [];
        $scope.universities = [];
        $scope.currentUniversity = null;
        $scope.course = {};
        $scope.currentStructure = null;

        $scope.loadData = function () {
            $http.get('/external/api/courses').success(function (response) {
                $scope.error = null;
                $scope.universities = response;
            }).error(function (response) {
                $scope.error = response.error;
            })
        }

        $scope.selectUniversity = function (index) {
            $scope.currentUniversity = $scope.universities[index];
            $scope.courses = $scope.universities[index].courses;
        }

        $scope.getCourses = function (pageIndex) {
            pageIndex = pageIndex < 0 ? 0 : pageIndex;
            $http.get('/external/api/courses?university=' + encodeURI($scope.currentUniversity.university) + '&pageIndex=' + pageIndex + '&pageSize=' + $scope.currentUniversity.pageSize)
                .success(function (response) {
                    $scope.error = null;
                    if (response.length > 0) {
                        $scope.currentUniversity.currentIndex = pageIndex;
                        if (pageIndex >= $scope.currentUniversity.pages.length) {
                            $scope.currentUniversity.pages.push(pageIndex);
                        }
                        $scope.currentUniversity.courses = response;
                        $scope.courses = response;
                    }
                }).error(function (response) {
                $scope.error = response.error;
            })
        }

        $scope.newUniversity = function () {
            $('#newUniversityModelDialog').modal('hide');

            var name = $('#universityName').val();
            if (!name) {
                $scope.error = 'University name is empty';
                return;
            }

            var data = {target: 'university', action: 'add', value: name};
            $http.post('/external/api/courses', data).success(function (response) {
                $scope.error = null;
                $scope.universities.push(response);
            }).error(function (response) {
                $scope.error = response.error;
            })
        }

        $scope.addCourse = function () {
            var data = {
                target: 'course',
                action: $scope.course.id ? 'update' : 'add',
                value: {university: $scope.currentUniversity.university, course: $scope.course}
            };

            $http.post('/external/api/courses', data).success(function (response) {
                $scope.error = null;
                $scope.currentStructure = null;
                if ($scope.course.id) {
                    for (var i = 0; i < $scope.currentUniversity.courses.length; ++i) {
                        if ($scope.currentUniversity.courses[i].id == $scope.course.id) {
                            $scope.currentUniversity.courses[i] = response;
                            break;
                        }
                    }
                } else {
                    if ($scope.currentUniversity.courses.length >= $scope.currentUniversity.pageSize) {
                        $scope.currentUniversity.courses = [];
                        $scope.courses = [];
                        var idx = $scope.currentUniversity.pages.length;
                        $scope.currentUniversity.pages.push(idx);
                        $scope.currentUniversity.currentIndex = idx;
                    }
                    $scope.currentUniversity.courses.push(response);
                }
                $scope.course = {};
                $('#btnSubmit').text('Submit');
                $('#btnCancel').hide();
            }).error(function (response) {
                $scope.error = response.error;
            })
        }

        $scope.editCourse = function (index) {
            $scope.course = {};

            for (var key in $scope.courses[index]) {
                $scope.course[key] = $scope.courses[index][key];
            }

            $('#btnSubmit').text('Update');
            $('#btnCancel').show();
        }

        $scope.delCourse = function (id) {
            var data = {
                target: 'course',
                action: 'remove',
                value: {university: $scope.currentUniversity.university, id: id}
            };

            $http.post('/external/api/courses', data).success(function (response) {
                $scope.error = null;
                for (var i = 0; i < $scope.currentUniversity.courses.length; ++i) {
                    if ($scope.currentUniversity.courses[i].id == id) {
                        $scope.currentUniversity.courses.splice(i, 1);
                        return;
                    }
                }
            }).error(function (response) {
                $scope.error = response.error;
            })
        }

        $scope.cancel = function () {
            $scope.course = {};

            $('#btnSubmit').text('Submit');
            $('#btnCancel').hide();
        }

        $scope.addCategory = function () {
            var category = $('#inputStructureCategory').val();
            $('#inputStructureCategory').val('');
            var summary = $('#inputStructureSummary').val().replace(/</gi, '&lt;').replace(/>/gi, '&gt;').replace(/\n/gi, '<br>');
            $('#inputStructureSummary').val('');

            if (!$scope.course.structure) {
                $scope.course.structure = [];
            }

            for (var i = 0; i < $scope.course.structure.length; ++i) {
                if ($scope.course.structure[i].category == category) {
                    return;
                }
            }

            $scope.course.structure.push({category: category, summary: summary});
        }

        $scope.delCategory = function (index) {
            $scope.course.structure.splice(index, 1);
        }

        $scope.addLesson = function () {
            var lesson = $('#inputStructureLesson').val();
            $('#inputStructureLesson').val('');

            for (var i = 0; i < $scope.currentStructure.lessons.length; ++i) {
                if ($scope.currentStructure.lessons[i] == lesson) {
                    return;
                }
            }

            $scope.currentStructure.lessons.push(lesson);
        }

        $scope.delLesson = function (index) {
            $scope.currentStructure.lessons.splice(index, 1);
        }

        $scope.selectCategory = function (category) {
            $scope.currentStructure = category;
        }

        $scope.addScholarship = function () {
            var name = $('#inputScholarshipName').val();
            $('#inputScholarshipName').val('');

            var value = $('#inputScholarshipValue').val();
            $('#inputScholarshipValue').val('');

            if (!$scope.course.scholarship) {
                $scope.course.scholarship = [];
            }

            for (var i = 0; i < $scope.course.scholarship.length; ++i) {
                if ($scope.course.scholarship[i].name == name && $scope.course.scholarship[i].value == value) {
                    return;
                }
            }

            $scope.course.scholarship.push({name: name, value: value});
        }

        $scope.delScholarship = function (index) {
            $scope.course.scholarship.splice(index, 1);
        }
    })

    .controller('partnerAccountCtrl', function ($scope, $http) {
        var activedIndex = -1;
        var accountPageSize = 10;
        var activityPageSize = 5;
        $scope.accountPageIndex = 0;
        $scope.accountPages = [0];
        $scope.accounts = [];
        $scope.partnerPageIndex = 0;
        $scope.partnerPages = [0];
        $scope.partners = [];
        $scope.select_idx = 0;
        $scope.groupAccountPageIndex = 0;
        $scope.groupAccountPages = [0];
        $scope.groupAccounts = [];
        $scope.activedPartner = null;
        $scope.error = null;
        $scope.filterActivity = null;
        $scope.income = {};

        $scope.hostname = location.host;

        $scope.activityPageIndex = 0;
        $scope.activityPages = [0];
        $scope.activites = [];
        $scope.inviteUserText = '';
        $scope.hint = '';

        $scope.newActivity = function () {
            $('#newActivityModelDialog').modal('hide');

            var name = $('#activityName').val();
            if (!name) {
                $scope.error = 'Activity name is empty';
                return;
            }

            var data = {name: name};
            $http.post('/partner/api/activity', data).success(function (response) {
                //$scope.activities.push(response);
                $scope.error = null;
                loadActivities();
            }).error(function (response) {
                $scope.error = response.error;
            })
        }

        function loadAccounts() {
            $scope.isLoading = true;
            var url = '/partner/api/account?index=' + $scope.accountPageIndex + '&size=' + accountPageSize;
            if ($scope.filterActivity) {
                url += '&activity=' + $scope.filterActivity._id;
            }
            $http.get(url).success(function (response) {
                $scope.accountPages = [];
                for (var i = 0; i < Math.ceil(response.count / accountPageSize); ++i) {
                    $scope.accountPages.push(i);
                }

                $scope.count = response.count;
                $scope.isLoading = false;
                $scope.accounts = response.data;
            }).error(function (response) {
                $scope.isLoading = false;
                $scope.error = response.error;
            });
        }

        function loadPartners() {
            $scope.isLoading = true;
            var url = '/partner/api/partner?index=' + $scope.partnerPageIndex + '&size=' + accountPageSize;
            $http.get(url).success(function (response) {
                $scope.partnerPages = [];
                for (var i = 0; i < Math.ceil(response.count / accountPageSize); ++i) {
                    $scope.partnerPages.push(i);
                }

                $scope.partnerCount = response.count;
                $scope.isLoading = false;
                $scope.partners = response.data;

                for (var i = 0; i < $scope.partners.length; i++) {
                    var accs = $scope.partners[i].accounts;
                    var submitted_count = 0;
                    for (var j = 0; j < accs.length; j++) {
                        if (accs[j].status) {
                            submitted_count++;
                        }
                    }

                    $scope.partners[i].account_count = accs.length;
                    $scope.partners[i].account_submitted_count = submitted_count;
                }
                $scope.select_idx = 0;
                $scope.groupAccountPageIndex = 0;
                $scope.groupAccountPages = [];
                for (var i = 0; i < Math.ceil($scope.partners[0].accounts.length / accountPageSize); ++i) {
                    $scope.groupAccountPages.push(i);
                }
                $scope.groupAccounts = $scope.partners[0].accounts.slice(0, accountPageSize);
            }).error(function (response) {
                $scope.isLoading = false;
                $scope.error = response.error;
            });
        }

        function loadActivities() {
            $http.get('/partner/api/activity?index=' + $scope.activityPageIndex + '&size=' + activityPageSize).success(function (response) {
                $scope.activityPages = [];
                for (var i = 0; i < Math.ceil(response.count / activityPageSize); ++i) {
                    $scope.activityPages.push(i);
                }

                $scope.activities = response.data;
            }).error(function (response) {
                $scope.error = response.error;
            });
        }

        function loadIncome() {
            $http.get('/partner/api/income').success(function (response) {
                $scope.income = response;
            }).error(function (response) {
                $scope.error = response.error;
            });

            var today = new Date();
            var startDate = '' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-01';
            $http.get('/partner/api/income?startDate=' + startDate).success(function (response) {
                $scope.income1Month = response;
            }).error(function (response) {
                $scope.error = response.error;
            });
        }

        $scope.showAccounts = function (idx) {
            if (idx >= 0) {
                $scope.filterActivity = $scope.activities[idx];
            } else {
                $scope.filterActivity = null;
            }
            loadAccounts();
        }

        $scope.page = function (index) {
            if (index < 0 || index >= $scope.accountPages.length) {
                return;
            }

            $scope.accountPageIndex = index;
            loadAccounts();
        }

        $scope.partnerPage = function (index) {
            if (index < 0 || index >= $scope.partnerPages.length) {
                return;
            }

            $scope.partnerPageIndex = index;
            loadPartners();
        }

        $scope.activityPage = function (index) {
            if (index < 0 || index >= $scope.activityPages.length) {
                return;
            }

            $scope.activityPageIndex = index;
            loadActivities();
        }

        $scope.load = function () {
            loadActivities();
            loadAccounts();
            loadPartners();
            loadIncome();
        }

        $scope.updatePartner = function () {
            if ($scope.activedPartner == null) {
                return;
            }

            var data = {};
            data.account = $scope.activedPartner;

            $http.post('/partner/api/partner', data).success(function (response) {
                $scope.partners.push(response);
            }).error(function (response) {
                $scope.error = response.error;
            });

            $('#editPartner').modal('hide');
        };

        $scope.createPartner = function () {
            $scope.activedPartner = {};
        };

        $scope.select = function (idx) {
            $scope.select_idx = idx;
            $scope.groupAccountPageIndex = 0;
            $scope.groupAccountPages = [];
            for (var i = 0; i < Math.ceil($scope.partners[idx].accounts.length / accountPageSize); ++i) {
                $scope.groupAccountPages.push(i);
            }
            $scope.groupAccounts = $scope.partners[idx].accounts.slice(0, accountPageSize);
        }

        $scope.groupAccountPage = function (index) {
            if (index < 0 || index >= $scope.groupAccountPages.length) {
                return;
            }

            $scope.groupAccountPageIndex = index;
            $scope.groupAccounts = $scope.partners[$scope.select_idx].accounts.slice(index * accountPageSize, (index + 1) * accountPageSize);
        }

        $scope.inviteUser = function () {
            $http.get('/partner/api/invite/' + encodeURIComponent($scope.inviteUserText)).success(function (response) {
                $scope.hint = invite_user_to_be_partner_success;
            }).error(function (response) {
                $scope.hint = response.error;
            });
        }
    })

    .filter('searchFilter', function () {
        return function (input, name, value) {
            console.log('searchFilter:' + name + ',' + value);

            if (name == 'country') {
                if (value && value != searchFilter_all) {
                    var result = [];
                    angular.forEach(input, function (university) {
                        if (university.country == value) {
                            result.push(university);
                        }
                    });
                    input = result;
                }
            }

            if (name == 'state') {
                if (value && value != searchFilter_all) {
                    var result = [];
                    angular.forEach(input, function (university) {
                        if (university.state == value) {
                            result.push(university);
                        }
                    });
                    input = result;
                }
            }

            return input;
        }
    })

    .directive("passwordVerify", function () {
        return {
            require: "ngModel",
            scope: {
                passwordVerify: '='
            },
            link: function (scope, element, attrs, ctrl) {
                scope.$watch(function () {
                    var combined;

                    if (scope.passwordVerify || ctrl.$viewValue) {
                        combined = scope.passwordVerify + '_' + ctrl.$viewValue;
                    }
                    return combined;
                }, function (value) {
                    if (value) {
                        ctrl.$parsers.unshift(function (viewValue) {
                            var origin = scope.passwordVerify;
                            if (origin !== viewValue) {
                                ctrl.$setValidity("passwordVerify", false);
                                return undefined;
                            } else {
                                ctrl.$setValidity("passwordVerify", true);
                                return viewValue;
                            }
                        });
                    }
                });
            }
        };
    })

    .directive("repeat", [function () {
        return {
            restrict: 'A',
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                if (ctrl) {
                    var otherInput = element.inheritedData("$formController")[attrs.repeat];

                    var repeatValidator = function (value) {
                        var validity = value === otherInput.$viewValue;

                        ctrl.$setValidity("repeat", validity);

                        return value;
                    };

                    ctrl.$parsers.push(repeatValidator);
                    ctrl.$formatters.push(repeatValidator);

                    otherInput.$parsers.push(function (value) {
                        var validity = false;

                        if (!value && !ctrl.$viewValue) {
                            validity = true;
                        }
                        else {
                            validity = value === ctrl.$viewValue
                        }

                        ctrl.$setValidity("repeat", validity);
                        return value;
                    });
                }
            }
        }
    }])

    .directive('rankingrepeat', [function () {
        var directive = {
            'restrict': 'A',
            'replace': true,
            'scope': {
                'ranking': '@ranking'
            },

            'link': function (scope, el, attrs) {
                scope.repeat_array = [];

                for (var i = 0; i < scope.ranking; i++) {
                    scope.repeat_array.push(i);
                }
            },

            'template': '<img ng-repeat="i in repeat_array" style="width: 18px;margin-right: 3px" src="/images/university/star2.png">'
        };

        return directive;
    }])

    .directive('initDatepicker', [function () {
        var directive = {
            'restrict': 'A',
            'link': function (scope, el, attrs) {
                var dateFormate = attrs['dateFormate'] || 'yy-mm-dd';
                var defaultDate = attrs['defaultDate'] || '-22y';
                var regional = attrs['regional'] || 'zh-CN';

                $(el).datepicker({
                    'changeYear': true,
                    'changeMonth': true,
                    'showAnim': 'fadeIn',
                    'dateFormat': dateFormate,
                    'defaultDate': defaultDate,
                    'yearRange': "1916:2030"
                }).bind('keydown', false);

                $(el).datepicker($.datepicker.regional[regional]);
            }
        };

        return directive;
    }])

    // .directive('initDatepicker', [function () {
    //     var directive = {
    //         'restrict': 'A',
    //         'link': function (scope, el, attrs) {
    //             var dateFormate = attrs['dateFormate'] || 'YYYY-MM-DD';
    //             var defaultDate = attrs['defaultDate'] || '-22y';
    //             var regional = attrs['regional'] || 'zh-CN';
    //             var reg = /^(\-|\+)?(\d+)(y|m|d)$/ ;
    //             var match = reg.exec (defaultDate) ;
    //             var typeMap = {
    //                 y: "year" ,

    //                 m: "month" ,

    //                 d: "days"
    //             } ;

    //             if (match && match[ 0 ]){

    //                 var method = match[ 1 ]== "-" ? "subtract" : "add";

    //                 var value = match[ 2 ];

    //                 var type = typeMap[match[3 ]] ;

    //                 defaultDate = moment()[method](value, type) ;

    //             } else {

    //                 defaultDate = false;

    //             }

    //             $(el).datetimepicker({

    //                 minDate: '1916-01-01' ,

    //                 maxDate: '2030-01-01' ,

    //                 format: dateFormate ,

    //                 defaultDate: defaultDate,

    //                 dayViewHeaderFormat:'MMMM YYYY'

    //             }).bind('keydown', false);
    //         }
    //     };
    //     return directive;
    // }])

    .directive("dateformat", ['$filter', function ($filter) {
        var dateFilter = $filter('date');
        var pattern = new RegExp('^(0[1-9]{1}|1[0-2])/(0[1-9]{1}|[1-2][0-9]{1}|3[01])/([0-9]{4})$');

        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModel) {
                ngModel.$formatters.push(function (value) {
                    var newValue = dateFilter(value, 'MM/dd/yyyy');
                    ngModel.$setValidity('dateformat', pattern.test(newValue));
                    return newValue;
                });

                ngModel.$parsers.push(function (value) {
                    var valid = pattern.test(value);
                    ngModel.$setValidity('dateformat', valid);
                    if (valid) {
                        // TODO convert it to Date object?
                        return value;
                    }
                    else {
                        return undefined;
                    }
                });
            }
        }
    }]);

export default function App() {
  const company = "北京兆泰辰光科技有限公司";
  const phone = "+65 83550296";
  const email = "zhaotai2018@163.com";
  const address = "北京市朝阳区锦芳路与秋实街交叉路口A2座07层";

  const products = [
    { title: "实验室通用耗材", desc: "离心管、移液枪头、培养皿、手套、滤膜等全品类现货。", sku: "1000+ SKU", badge: "热销" },
    { title: "分析仪器", desc: "气/液相色谱、原子吸收、紫外/荧光、粒度仪等整机与配件。", sku: "品牌齐全", badge: "整机" },
    { title: "样品前处理", desc: "固相萃取柱、微波消解罐、滤器、进样瓶、样品瓶等。", sku: "交期稳定", badge: "到货快" },
    { title: "环境监测设备", desc: "水质/土壤/大气采样与在线监测方案，含标准试剂。", sku: "方案支持", badge: "项目" },
    { title: "生物医药耗材", desc: "细胞培养瓶、冻存管、PCR板、灭菌移液管等GMP可追溯。", sku: "可开票", badge: "无菌" },
    { title: "定制加工", desc: "异形石英器皿、定制金属部件、专用夹具与托盘。", sku: "按需定制", badge: "加工" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600 grid place-items-center text-white font-bold">仪</div>
            <div className="font-semibold">{company}</div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-blue-600">产品中心</a>
            <a href="#solutions" className="hover:text-blue-600">解决方案</a>
            <a href="#about" className="hover:text-blue-600">关于我们</a>
            <a href="#contact" className="hover:text-blue-600">联系我们</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-2xl px-4 py-2 bg-blue-600 text-white text-sm hover:bg-blue-700">获取报价</a>
        </div>
      </header>

      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              一站式 <span className="text-blue-600">仪器与实验耗材</span> 供应
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              覆盖理化分析、环境监测、生物医药等领域。现货直发、项目打包、技术服务与售后维护全流程支持。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="rounded-2xl px-5 py-3 bg-blue-600 text-white hover:bg-blue-700">查看产品</a>
              <a href="#solutions" className="rounded-2xl px-5 py-3 border border-gray-300 hover:border-gray-400">解决方案</a>
            </div>
            <ul className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-600">
              <li><strong className="text-gray-900">1000+</strong><br/>SKU库存</li>
              <li><strong className="text-gray-900">48h</strong><br/>快速交付</li>
              <li><strong className="text-gray-900">7×12h</strong><br/>技术支持</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-sm border grid place-items-center overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="400" height="300" rx="24" fill="#eff6ff" />
                <g stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="40" y="40" width="140" height="90" rx="8" fill="white" />
                  <path d="M50 110h120" />
                  <circle cx="70" cy="75" r="10" />
                  <rect x="220" y="50" width="140" height="200" rx="12" fill="white" />
                  <path d="M235 90h110M235 115h110M235 140h110M235 165h60" />
                  <rect x="60" y="170" width="120" height="70" rx="10" fill="white" />
                  <path d="M70 210h100" />
                </g>
              </svg>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow p-4 border">
              <div className="text-xs text-gray-500">服务热线</div>
              <div className="font-semibold text-lg">{phone}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">产品中心</h2>
          <a href="#contact" className="text-blue-600 text-sm hover:underline">批量采购/索取报价 →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <div key={idx} className="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="h-40 bg-gray-100 grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 7l9 5 9-5-9-4-9 4z" />
                  <path d="M3 7v10l9 5 9-5V7" />
                  <path d="M12 12v10" />
                </svg>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">{p.badge}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-3 text-xs text-gray-500">{p.sku}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">行业解决方案</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "高校/科研实验室", points: ["集中目录与框架协议","实验室整体搬迁/建设","设备维保与耗材统筹"] },
              { title: "环保监测机构", points: ["采样-分析-质控全流程","标液与质控品配套","应急用耗材快速保障"] },
              { title: "生物医药企业", points: ["GMP合规耗材供应","冷链配送","批次追溯与留样"] }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                  <div className="font-semibold">{s.title}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {s.points.map((t, j)=>(
                    <li key={j} className="flex items-start gap-2">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">为什么选择我们</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[
            { title: "现货仓配", desc: "北京周边自有仓储，上午下单，下午可送达（以物流为准）" },
            { title: "品牌授权", desc: "与多家原厂/总代长期合作，渠道规范，支持验真溯源" },
            { title: "技术支持", desc: "具备理化/环境/生物方向工程师，可协助选型与安装调试" },
            { title: "售后无忧", desc: "整机保内上门，耗材退换畅通，急单专人处理" }
          ].map((a, i) => (
            <div key={i} className="bg-white rounded-2xl border p-5 shadow-sm">
              <div className="mb-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="font-semibold">{a.title}</div>
              <div className="mt-1 text-sm text-gray-600">{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">关于 {company}</h2>
            <p className="mt-4 text-gray-600">
              {company}长期服务于北京及华北地区科研与产业客户，提供仪器销售、耗材供应、技术支持与售后服务。我们坚持“品质、效率、合规”的经营原则，帮助客户降本增效。
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> 营业执照与资质齐全</li>
              <li className="flex items-center gap-2"><svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> 可开具增值税专用发票</li>
              <li className="flex items-center gap-2"><svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> 多品牌原厂授权</li>
              <li className="flex items-center gap-2"><svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg> 项目投标材料支持</li>
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gray-100 border grid place-items-center">
            <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="400" height="300" rx="24" fill="#f8fafc" />
              <g stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M50 180l150-80 150 80v40H50v-40z" fill="white" />
                <path d="M90 220v-60h60v60M170 220v-60h60v60M250 220v-60h60v60" fill="#e2e8f0" />
                <path d="M50 180l150-80 150 80" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">联系我们</h2>
            <p className="mt-3 text-gray-600">欢迎来电/邮件咨询，获取最新价目表与到货期。</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><span>📞</span> {phone}</div>
              <div className="flex items-center gap-3"><span>✉️</span> {email}</div>
              <div className="flex items-center gap-3"><span>📍</span> {address}</div>
              <div className="flex items-center gap-3"><span>⏰</span> 周一至周六 9:00-18:00</div>
            </div>
          </div>
          <form className="bg-white rounded-2xl border p-6 shadow-sm" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">您的姓名</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" placeholder="张三" />
              </div>
              <div>
                <label className="text-sm">联系方式</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200" placeholder="手机号或邮箱" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm">需求描述</label>
                <textarea className="mt-1 w-full rounded-xl border px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-blue-200" placeholder="请填写产品型号、数量或项目需求…" />
              </div>
            </div>
            <button className="mt-4 w-full rounded-2xl bg-blue-600 text-white py-3 hover:bg-blue-700">提交咨询</button>
            <p className="mt-2 text-xs text-gray-500">提交表单仅作演示，需接入后端方可收集信息。</p>
          </form>
        </div>
      </section>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 grid place-items-center text-white font-bold">仪</div>
              <span className="font-semibold">{company}</span>
            </div>
            <p className="text-sm text-gray-600">一站式仪器与实验耗材供应商</p>
          </div>
          <div>
            <div className="font-semibold mb-2">快速链接</div>
            <ul className="text-sm space-y-1 text-gray-600">
              <li><a href="#products" className="hover:text-blue-600">产品中心</a></li>
              <li><a href="#solutions" className="hover:text-blue-600">解决方案</a></li>
              <li><a href="#about" className="hover:text-blue-600">关于我们</a></li>
              <li><a href="#contact" className="hover:text-blue-600">联系我们</a></li>
            </ul>
          </div>
          <div className="text-sm text-gray-600">
            <div>地址：{address}</div>
            <div>电话：{phone} ｜ 邮箱：{email}</div>
            <div className="mt-2">（占位）</div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} {company}. 保留所有权利。</div>
      </footer>
    </div>
  )
}

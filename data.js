/* ============================================================
   Shared data: publications + talks
   ============================================================ */
const PUBS = [
{y:2026, t:"POSTER: What HTTP Basic Authentication Reveals: Measuring Identifiable Internet-Exposed Devices", a:"Ruri Otsuka, Ryu Kuki, Yin Minn Pa Pa, Katsunari Yoshioka", v:"DIMVA, Greece", tags:["Poster"], links:[["Conference","https://www.dimva.org/dimva2026/"]]},
{y:2026, t:"Disposable accounts, persistent ecosystem: A cross-forum study of Initial Access Brokers", a:"Towa Kaido, Shogo Ito, Yin Minn Pa Pa, Katsunari Yoshioka", v:"Cambridge Cybercrime Conference, UK", tags:[], links:[["Conference","https://www.cambridgecybercrime.uk/conference2026.html"]]},
{y:2026, t:"API-Based Observation and Analysis of Telegram's Moderation of Cybercrime Channels", a:"Daiki Baba, Riku Aoto, Yin Minn Pa Pa, Katsunari Yoshioka", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICSS2026_baba.pdf"]]},
{y:2026, t:"Collecting and Categorizing Cybercrime-Related Channels on Telegram at Scale", a:"Riku Aoto, Daiki Baba, Yin Minn Pa Pa, Katsunari Yoshioka", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICSS2026_aoto.pdf"]]},
{y:2026, t:"LLM-Based Generation of Proof-of-Concept Code for Evading Sandbox Analysis", a:"Hikaru Matsuzawa, Yukihiro Higashi, Anh Nguyen Thi Van, Rui Tanabe, Yin Minn Pa Pa, Katsunari Yoshioka", v:"ICSS, Japan", tags:["Best Paper Award"], links:[["Paper","https://ymppjp.github.io/files/ICSS_Evasive_Malware.pdf"]]},
{y:2026, t:"Understanding Web-Exposed Cybercrime-Related Content on IoT Botnet Infrastructure", a:"Qingxin Mao, Yin Minn Pa Pa, Rui Tanabe, Katsunari Yoshioka", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICSS2026_Mao.pdf"]]},
{y:2026, t:"Leveraging LLMs to Generate and Counter Sandbox Evasion Techniques", a:"Anh Nguyen Van, Matsuzawa Hikaru, Ito Hikaru, Yin Minn Pa Pa, Rui Tanabe, Katsunari Yoshioka", v:"NDSS 2026, USA", tags:["Poster"], links:[["Poster","https://ymppjp.github.io/files/ndss26-poster-53.pdf"]]},

{y:2025, t:"An Analysis of Syntactic Evolution and Detection Performance in Smart Ponzi Schemes", a:"Rikuto Otsu, Yin Minn Pa Pa, Katsunari Yoshioka, Kazumasa Omote", v:"ICBAT, Kanazawa, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICBTA_otsu_tsukuba.pdf"]]},
{y:2025, t:"Large-Scale Experiment on IoT Device Identification Using Basic Authentication Responses", a:"Ruri Otsuka, Yin Minn Pa Pa, Katsunari Yoshioka", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/CSS_otsuka.pdf"]]},
{y:2025, t:"Detection of Third-Party Dependencies in Darknet Markets via LLM-Based Signature Generation", a:"Akinori Uchino, Yin Minn Pa Pa, Katsunari Yoshioka", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/CSS_uchino.pdf"]]},
{y:2025, t:"Examining the Feasibility of Conducting Human Intelligence (HUMINT) on Telegram Based on Informed Consent", a:"Sota Kubo, Yukihiro Hagayama, Yin Minn Pa Pa, Tatunori Mori, Katsunari Yoshioka", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/CSS_kubo.pdf"]]},
{y:2025, t:"Towards an Ethical Monitoring LLM for HUMINT Dialogues with a Menlo Report Based Checklist", a:"Yukihiro Hagayama, Sota Kubo, Yin Minn Pa Pa, Tatunori Mori, Katsunari Yoshioka", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/CSS_nagayama.pdf"]]},
{y:2025, t:"Detection of IAB Posts Using DarkBERT and Llama 3.3", a:"Towa Kaido, Shogo Ito, Rui Tanabe, Yin Minn Pa Pa, Katsunari Yoshioka", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/CSS_kaido.pdf"]]},
{y:2025, t:"An Investigation of Initial Access Brokers on Underground Forums: Market Trends and Activity Analysis", a:"Shogo Ito, Towa Kaido, Rui Tanabe, Yin Minn Pa Pa, Katsunari Yoshioka", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/CSS_ito.pdf"]]},
{y:2025, t:"Enhancing Sandbox Evasion Resistance Using LLM", a:"Hikaru Ito, Nguyen Thi Van Anh, Yin Minn Pa Pa, Rui Tanabe, Katsunari Yoshioka", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ItoHikaru_CSS2025.pdf"]]},
{y:2025, t:"Investigating the Evolution of Syntax and Detection Effectiveness in Smart Ponzi Schemes", a:"Rikuto Otsu, Yin Minn Pa Pa, Katsunari Yoshioka, Kazumasa Omote", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/CSS_otsu_tsukuba_revise.pdf"]]},
{y:2025, t:"A Longitudinal Analysis of LockBit 3.0's Extortion Lifecycle and Response to Law Enforcement", a:"Yin Minn Pa Pa, Yuji Sekine, Yamato Kawaguchi, Tatsuki Yogo, Kelvin Lubbertsen, Rolf van Wegberg, Michel van Eeten, Katsunari Yoshioka", v:"RAID 2025, Gold Coast, Australia", tags:["RAID 2025"], links:[["Conference","https://raid2025.github.io/accepted_open.html"],["Paper","https://ymppjp.github.io/files/RAID_2025_Camera_Ready.pdf"]]},
{y:2025, t:"Poster: Conventional LLM Use Struggles to Generate Sandbox Evasion Code from Unseen Categories", a:"Yukihiro Higashi, Hikaru Matsuzawa, Rui Tanabe, Yin Minn Pa Pa, Katsunari Yoshioka", v:"Euro S&P, Venice", tags:["Poster"], links:[["Poster","https://ymppjp.github.io/files/eurosp25_posters_higashi_kun.pdf"]]},
{y:2025, t:"Experimental Demonstration of Attracting Attackers to Attack Observation Systems by Imitating Initial Access Brokers on Telegram", a:"Takanori Matsumura, Riku Aoto, Yin Minn Pa Pa, Rui Tanabe, Katsunari Yoshioka", v:"Security Summer Summit (ICSS), Hokkaido, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/SSS2025_matsumura.pdf"]]},
{y:2025, t:"STIX Threat Intelligence Extraction from Telegram via Prompt-Aligned LLM", a:"Shoi Kaneko, Riku Aoto, Nguyen Thi Van Anh, Yin Minn Pa Pa, Rui Tanabe, Katsunari Yoshioka", v:"Security Summer Summit (ICSS), Hokkaido, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/kaneko_sss.pdf"]]},
{y:2025, t:"A Framework for Iterative Sandbox Evasion Code Generation Using Attacker and Defender LLMs", a:"Rei Tanabe, Yin Minn Pa Pa, Rui Tanabe, Katsunari Yoshioka, Kento Uchida, Shinichi Shirakawa", v:"Security Summer Summit (ICSS), Hokkaido, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/SSS2025_tanabe.pdf"]]},
{y:2025, t:"Exploration of IoT Platforms Utilizing Censys Internet-wide Scanning System", a:"Sha Peng, Yin Minn Pa Pa, Takayuki Sasaki, Katsunari Yoshioka", v:"CSEC, Gunma, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/CSEC2025_Housan.pdf"]]},
{y:2025, t:"Discovery and Analysis of Cybercrime-Related Telegram Channels using the Similar Channel Recommendation Feature", a:"Riku Aoto, Yin Minn Pa Pa, Katsunari Yoshioka", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICSS_2025_aotokun.pdf"]]},
{y:2025, t:"Text-based Human Intelligence Gathering Framework: Legal and Ethical Considerations and the Application of LLMs", a:"Ryosuke Suzuki, Yamato Kawaguchi, Yin Minn Pa Pa, Hiroaki Yamaoka, Katsunari Yoshioka", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICSS_2025_suzuki_ryo.pdf"]]},
{y:2025, t:"Evaluating the Classification Accuracy of an LLM for Sandbox Evasion Proof-of-Concept Code", a:"Yukihiro Higashi, Hikaru Matsuzawa, Rui Tanabe, Yin Minn Pa Pa", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICSS_2025_Higashi_kun.pdf"]]},
{y:2025, t:"Towards Evaluating the Detection Accuracy of Internet-Wide Scanners for Frequently Exploited Vulnerabilities", a:"Koudai Aoyama, Ruri Otsuka, Yin Minn Pa Pa, Katsunari Yoshioka", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICSS_2024_Aoyama_kun.pdf"]]},
{y:2025, t:"Linking IoT Attacks to Cybercrime-as-a-Service Offerings Using LLM and DNS Data", a:"Qingxin Mao, Yin Minn Pa Pa, Rui Tanabe, Katsunari Yoshioka", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICSS_2025_moukun.pdf"]]},
{y:2025, t:"DeFiIntel: A Dataset Bridging On-Chain and Off-Chain Data for DeFi Token Scam Investigation", a:"Iori Suzuki, Yin Minn Pa Pa, Nguyen Anh Thi Van, Katsunari Yoshioka", v:"MADWEB (NDSS workshop), San Diego, USA", tags:[], links:[["Conference","https://madweb.work/"],["Paper","https://ymppjp.github.io/files/NDSS2025_Project_Suzuki_Iori.pdf"]]},
{y:2025, t:"Application of ChatGPT Search to Device Inference Focusing on Basic Authentication Requests and Responses", a:"Ruri Otsuka, Yin Minn Pa Pa, Katsunari Yoshioka", v:"SCIS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/2025_SCIS_Otsuka_san.pdf"]]},

{y:2024, t:"Exploring the Impact of LLM Assisted Malware Variants on Anti-Virus Detection", a:"Zhewei Huang, Yin Minn Pa Pa, Katsunari Yoshioka", v:"IEEE DSC 2024, Japan", tags:["DSC 2024"], links:[["Paper","https://ymppjp.github.io/files/dsc_2024_kou.pdf"]]},
{y:2024, t:"Investigating Black-Market Jobs on Social Networking Service", a:"Yamato Kawaguchi, Kazuki Takada, Yin Minn Pa Pa, Rui Tanabe, Katsunari Yoshioka, Tsutomu Matsumoto", v:"IEEE DSC 2024, Japan", tags:["DSC 2024"], links:[["Paper","https://ymppjp.github.io/files/202407_DSC_SNS_Fraud_short.pdf"]]},
{y:2024, t:"INSITE: Cybersecurity Framework Integrating Attack Observation with OSINT/HUMINT", a:"Katsunari Yoshioka, Shoi Kaneko, Koudai Aoyama, Ryu Kuki, Yin Minn Pa Pa, Takayuki Sasaki, Rui Tanabe", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/Insite_CSS_2024.pdf"]]},
{y:2024, t:"Investigation of Cybercrime-Related Slang on Discord Using Large Language Models", a:"Yamato Kawaguchi, Yin Minn Pa Pa, Katsunari Yoshioka", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/202408_CSS_Discord_Slang.pdf"]]},
{y:2024, t:"Investigating the Impact of Evasive Malware Created with LLM on Sandbox Analysis", a:"Hikaru Matsuzawa, Soda Kubo, Yin Minn Pa Pa, Rui Tanabe, Katsunari Yoshioka", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/CSS2024_matsuzawa.pdf"]]},
{y:2024, t:"Investigation of Device Fingerprinting Focused on Basic Authentication Requests", a:"Ruri Otsuka, Kiyokazu Yoshioka, Yin Minn Pa Pa, Katsunari Yoshioka", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/Otsukasan_CSS_2024.pdf"]]},
{y:2024, t:"Towards the Classification of Newly Exploits Observed by Honeypots", a:"Ryu Kuki, Sasaki Takayuki, Yin Minn Pa Pa, Katsunari Yoshioka", v:"CSS, Japan", tags:["Best Paper Award"], links:[["Paper","https://ymppjp.github.io/files/CSS2024_kukikun.pdf"]]},
{y:2024, t:"Building a Dataset for Accelerating Research against Fraudulent DeFi Tokens", a:"Iori Suzuki, Yin Minn Pa Pa, Katsunari Yoshioka", v:"Security Summer Summit, Hokkaido, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/SSS_suzuki.pdf"]]},
{y:2024, t:"Detection of Web3 Phishing Sites Focused on Permission Requests After Wallet Connection", a:"Riku Aoto, Yin Minn Pa Pa, Katsunari Yoshioka", v:"Security Summer Summit, Hokkaido, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/aoto_SSS.pdf"]]},
{y:2024, t:"Impact of ChatGPT Assisted Polymorphic Malware on Antivirus Detection", a:"Zhewei Huang, Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/%E9%BB%84_ICSS_2024.pdf"]]},
{y:2024, t:"Unveiling the Shadows: Analyzing Cryptocurrency Address Management and Fund Movement of Darknet Markets", a:"Aiman Syazwan Bin Abdul Razak, Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICSS2024_aiman.pdf"]]},
{y:2024, t:"Analyzing Attackers and Victims Actions via LockBit3.0 Website Data Dynamics", a:"Yuji Sekine, Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/ICSS2024_Sekine.pdf"]]},
{y:2024, t:"ChatGPT Assisted Information Collection System for Cybercrime on Discord", a:"Yamato Kawaguchi, Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"SCIS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/2024_SCIS_kawaguchikun.pdf"]]},

{y:2023, t:"Evaluating the Behavior Detection Functionality of Antivirus and EDR against Double Extortion Ransomware", a:"Shunsuke Tanizaki, Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/2023_CSS_Tanizaki.pdf"]]},
{y:2023, t:"An Attacker's Dream? Exploring the Capabilities of ChatGPT for Developing Malware", a:"Yin Minn Pa Pa, Shunsuke Tanizaki, Tetsui Kou, Michel van Eeten, Katsunari Yoshioka, Tsutomu Matsumoto", v:"CSET, USA", tags:["CSET 2023"], links:[["Paper","https://ymppjp.github.io/files/paper_18.pdf"],["Slides","https://cset23.isi.edu/slides/cset2023-slides-papa.pdf"]]},
{y:2023, t:"Towards Observation of Online Fraud Exploiting Multiple SNS", a:"Yamato Kawaguchi, Kazuki Takada, Yin Minn Pa Pa, Rui Tanabe, Katsunari Yoshioka, Tsutomu Matsumoto", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/2023_icss_kawaguchikun.pdf"]]},
{y:2023, t:"Assessment Method for Persistent Malware Infection on IoT Devices", a:"Shunki Soeda, Takahiro Inoue, Rui Tanabe, Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"ICSS, Japan", tags:["Best Paper Award"], links:[["Paper","https://ymppjp.github.io/files/2023_ICSS_Soedakun.pdf"]]},

{y:2022, t:"Cryptocurrency Analysis System for Investigating Cyber Crime Economy", a:"Hiroshi Mori, Hiroshi Kumagai, Yin Minn Pa Pa, Yuta Takata, Ryoya Furukawa, Yuji Sakurai, Masaki Kamizono", v:"ICSS, Japan", tags:[], links:[]},

{y:2021, t:"Visualizing Method for Clustering Illicit Cryptocurrency by Transaction Time", a:"Hiroshi Mori, Hiroshi Kumagai, Yin Minn Pa Pa, Yuta Takata, Shogo Suzuki, Masaki Kamizono", v:"CSEC, Japan", tags:[], links:[]},
{y:2021, t:"Hiding Objects from Computer Vision by Exploiting Correlation Biases", a:"Yin Minn Pa Pa, Paul Ziegler, Masaki Kamizono", v:"Black Hat Asia 2021, online", tags:["Black Hat Asia 2021"], links:[["Slides","https://i.blackhat.com/asia-21/Thursday-Handouts/as-21-PaPa-Ziegler-Hiding-Objects-From-Computer-Vision-By-Exploiting-Correlation-Biases.pdf"],["Video","https://www.youtube.com/watch?v=Lfsc5TkJ07U"]]},

{y:2018, t:"Counter-Infiltration: Future-Proof Counter Attacks Against Exploit Kit Infrastructure", a:"Yin Minn Pa Pa, Hiroshi Kumagai, Masaki Kamizono, Takahiro Kasama", v:"Black Hat Asia 2018, Singapore", tags:["Black Hat Asia 2018"], links:[["Whitepaper","https://ymppjp.github.io/files/asia-18-papa-Future-Proof%20Counter%20Attacks%20Against%20Exploit%20Kit%20Infrastructure-WP.pdf"],["Video","https://www.youtube.com/watch?v=jATsubShSv4"]]},

{y:2016, t:"A Study on Detecting Cyber Attack Resources by Coordinated Passive and Active Monitoring", a:"Yin Minn Pa Pa", v:"Ph.D. Dissertation", tags:[], links:[["Dissertation","https://ymppjp.github.io/files/%E5%8D%9A%E5%A3%AB%E8%AB%96%E6%96%87-20151028.pdf"]]},
{y:2016, t:"Malware Expansion Interception Method Focused on Remote Takeover against Malware-infected Hosts", a:"Rui Tanabe, Shogo Suzuki, Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"Journal of Information Processing, Japan, Vol.57-No.9", tags:["Journal","Best Paper Award"], links:[["Journal Paper","https://ipsj.ixsq.nii.ac.jp/ej/index.php?active_action=repository_view_main_item_detail&page_id=13&block_id=8&item_id=174669&item_no=1"]]},
{y:2016, t:"Sandprint: Fingerprinting Malware Sandboxes to Provide Intelligence for Sandbox Evasion", a:"Akira Yokoyama, Kou Ishii, Rui Tanabe, Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto, Takahiro Kasama, Daisuke Inoue, Michael Brengel, Michael Backes, Christian Rossow", v:"RAID 2016, France", tags:["RAID 2016"], links:[["Paper","https://ymppjp.github.io/files/paper_10.pdf"]]},
{y:2016, t:"Improving IoTPOT for Observing Various Attacks Target Embedded Devices", a:"Shogo Suzuki, Yin Minn Pa Pa, Yuta Ezawa, Sou Nakayama, Ying Tie, Katsunari Yoshioka, Tsutomu Matsumoto", v:"ICSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/paper_9.pdf"]]},
{y:2016, t:"IoTPOT: A Novel Honeypot for Revealing Current IoT Threats", a:"Yin Minn Pa Pa, Shogo Suzuki, Katsunari Yoshioka, Tsutomu Matsumoto, Takahiro Kasama, Christian Rossow", v:"Journal of Information Processing, Japan, Vol.24-No.3", tags:["Journal"], links:[["Journal Paper","https://ymppjp.github.io/files/paper_8.pdf"]]},

{y:2015, t:"Collection and Analysis of Cyber Security Data by Active and Passive Monitoring", a:"Katsunari Yoshioka, Yin Minn Pa Pa, Shogo Suzuki, Naoki Watanabe, Sou Nakayama, Toshiya Shimura, Haoyuan Xu, Junji Shikata, Tsutomu Matsumoto, Koji Nakao, Takeo Hariu, Makoto Iwamura, Takeshi Yagi, Mitsuaki Akiyama, Masato Terada, Shigeyoshi Shima, Masafumi Watanabe, Takahiro Kakumaru, Masaru Kawakita, Masahiro Yamada, Daisuke Inoue", v:"CSS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/paper_7.pdf"]]},
{y:2015, t:"IoTPOT: Analysing the Rise of IoT Compromises", a:"Yin Minn Pa Pa, Shogo Suzuki, Katsunari Yoshioka, Tsutomu Matsumoto, Takahiro Kasama, Christian Rossow", v:"9th USENIX Workshop on Offensive Technologies (WOOT), USA", tags:["WOOT 2015"], links:[["Paper","https://ymppjp.github.io/files/paper_6.pdf"]]},
{y:2015, t:"Detecting Malicious Domains and Authoritative Name Servers Based on Their Distinct Mappings to IP Addresses", a:"Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"Journal of Information Processing, Japan, Vol.23, No.5, pp.623–632", tags:["Journal"], links:[["Journal Paper","https://ymppjp.github.io/files/paper_5.pdf"]]},

{y:2013, t:"A Method for Detecting Malware Infected Hosts with Similarity of Name Resolution Behavior", a:"Daisuke Makita, Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"SCIS, Japan", tags:[], links:[["Paper","https://ymppjp.github.io/files/paper_4.pdf"]]},
{y:2013, t:"Finding Malicious Authoritative DNS Server", a:"Yin Minn Pa Pa, Daisuke Makita, Katsunari Yoshioka, Tsutomu Matsumoto", v:"ICSS, Yokohama, Japan", tags:["Best Technical Report Award"], links:[["Paper","https://ymppjp.github.io/files/paper_3.pdf"]]},
{y:2013, t:"Search Engine Based Investigation on Misconfiguration of Zone Transfer", a:"Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"Asia Joint Conference on Information Security (Asia-JCIS), Seoul, Korea", tags:["Best Paper Award"], links:[["Paper","https://ymppjp.github.io/files/paper_2.pdf"]]},

{y:2012, t:"Search Engine Based Investigation on Misconfiguration of Zone Transfer", a:"Yin Minn Pa Pa, Katsunari Yoshioka, Tsutomu Matsumoto", v:"International Workshop on Security (IWSEC), Fukuoka, Japan", tags:["Poster"], links:[["Poster","https://ymppjp.github.io/files/paper_1.pdf"]]},
];

const TALKS = [
{y:2025, t:"AI Meets Cybercrime: From Simulation to Structured Intelligence of Cybercrime Ecosystems", v:"Invited Talk — Asia JCIS 2025, Seoul, Korea", links:[["Program","https://asiajcis2025.sch.ac.kr/program.html"]]},
{y:2024, t:"The Abuse of AI in Cybersecurity", v:"7th Workshop on Intelligent IoT for Empowering People's Lifestyle and Well-being, Kyoto, Japan", links:[["Program","https://web.sfc.keio.ac.jp/~t19486mt/a3foresight/ws7/program.html"]]},
{y:2024, t:"Cyber Security Women's Success and Career Paths", v:"Panel Discussion — Nihonbashi Tower, Tokyo, Japan", links:[["Program","https://www2.nict.go.jp/csri/nict_cyber2024/"]]},
{y:2023, t:"AI and Security", v:"Panel Discussion — 8th Franco-Japanese Cybersecurity Workshop, Bordeaux, France", links:[["Program","https://fj-cybersec2023.sciencesconf.org/data/pages/Program_FJCW_2023_11_28.pdf"]]},
{y:2023, t:"The Dark Side of AI in Cybersecurity", v:"Invited Talk — 8th Franco-Japanese Cybersecurity Workshop, Bordeaux, France", links:[["Program","https://fj-cybersec2023.sciencesconf.org/data/pages/Program_FJCW_2023_11_28.pdf"]]},
{y:2023, t:"攻撃者の夢？ChatGPTのマルウェア開発能力を探る", v:"Requested Talk — Communication Systems Conference, Shizuoka, Japan", links:[["Program","https://ken.ieice.org/ken/paper/20231109LCYx/"]]},
{y:2023, t:"攻撃者の夢？ChatGPTのマルウェア開発能力を探る", v:"Invited Talk — IoT Security Forum 2023, Japan", links:[["Program","https://academy.impress.co.jp/event/iot-security202309/timetable02.html"]]},
{y:2020, t:"Education in 20xx & Society 5.0 in Japan, The Art of 21st Century Learning", v:"Myanmar Gateway Engineering and Consultancy, Online", links:[["Slides","https://github.com/yinminnpapa/website_data/raw/master/Helping_Myanmar/20201213_Education%26Society_InJapan.pdf"]]},
{y:2020, t:"New Trends in Technologies", v:"Myanmar Science and Technological Community, Online", links:[]},
{y:2020, t:"Ask Me Anything About Cybersecurity", v:"Panel Q&A (with Noam Rabinovich, Sean Neary) — Money20/20 Asia, Singapore", links:[["Program","https://money2020asia2019.sched.com/event/Kr4U/ask-me-anything-about-cybersecurity"]]},
{y:2019, t:"Mind the Hack", v:"Panel Discussion (with Kevyn Yong, Eric Hoh) — Money20/20 Asia, Singapore", links:[["Program","https://money2020asia2019.sched.com/event/KQmN/mind-the-hack"]]},
{y:2018, t:"Cyber Security Jobs in Japan", v:"Things Talk@UIT — University of Information Technology, Yangon, Myanmar", links:[]},
{y:2017, t:"Tracing the Hacker", v:"Yangon Technological University, Myanmar", links:[["Slides","https://github.com/yinminnpapa/website_data/raw/master/papers/talk_2.pdf"]]},
{y:2017, t:"Cyber Security Awareness Seminar", v:"Yangon City Development Committee, Myanmar", links:[["Slides","https://github.com/yinminnpapa/website_data/raw/master/papers/talk_1.pdf"]]},
{y:2017, t:"デコイになって落とせ！: Exploit Kitをテイクダウンする新たな手法", v:"With Kamizono, Kumagai, Kasama — AV Tokyo 2017, Japan", links:[]},
{y:2017, t:"サイバー攻撃観測記録 〜彼の名はヨセフ〜", v:"With Kumagai, Kamizono, Tsuda — AV Tokyo 2017, Japan", links:[]},
{y:2016, t:"IoTPOT Updates", v:"Delft University of Technology, Netherlands", links:[]},
{y:2015, t:"IoTPOT", v:"University of California, Santa Barbara, USA", links:[]},
{y:2015, t:"IoTPOT", v:"Northeastern University, Boston, USA", links:[]},
];

/* ---------------- Shared render helpers ---------------- */
function renderPubRow(container, item, isTalk){
  const row = document.createElement('div');
  row.className = 'pub';
  const authorsHtml = !isTalk ? item.a.split(', ').map(name =>
    name.includes('Yin Minn Pa Pa') ? '<span class="me">'+name+'</span>' : name
  ).join(', ') : null;
  const tagsHtml = (item.tags||[]).map(t=>
    '<span class="tag'+(t.toLowerCase().includes('award')?' award':'')+'">'+t+'</span>'
  ).join('');
  const linksHtml = (item.links||[]).map(([label,url])=>
    '<a href="'+url+'" target="_blank" rel="noopener">'+label+' →</a>'
  ).join('');
  row.innerHTML =
    '<div class="pub-marker"></div>'+
    '<div class="pub-body">'+
      '<div class="pub-title">'+item.t+'</div>'+
      '<div class="pub-meta">'+(isTalk ? item.v : authorsHtml+' — '+item.v)+'</div>'+
      (tagsHtml ? '<div class="pub-tags">'+tagsHtml+'</div>' : '')+
      (linksHtml ? '<div class="pub-links">'+linksHtml+'</div>' : '')+
    '</div>';
  container.appendChild(row);
}

function renderGroupedByYear(container, items, isTalk){
  container.innerHTML = '';
  let lastYear = null;
  items.forEach(item=>{
    if(item.y !== lastYear){
      const h = document.createElement('div');
      h.className = 'year-heading';
      h.textContent = item.y;
      container.appendChild(h);
      lastYear = item.y;
    }
    renderPubRow(container, item, isTalk);
  });
}

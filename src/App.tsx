import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface NavBarProps {
  items: Slide[];
  current: number;
  onJump: (index: number) => void;
}

const slides: Slide[] = [
  // 1️⃣ HOME
  {
    id: "home",
    label: "Home",
    content: (
      <motion.div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
            MingleUp
          </span>
          <br />AI가 만들어주는 새로운 <br />만남의 시작
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
          단순한 매칭이 아니라, AI가 분석한 자연스러운 케미로 연결되는 새로운 방식의 만남.<br />
          당신의 성향, 관심사, 대화 톤을 읽는 똑똑한 파티 플랫폼.
        </p>
        <p className="text-sm text-gray-500 mt-6">
          프로젝트 기간: 2025.10.27 ~ 2025.12.02
        </p>
      </motion.div>
    ),
  },

  // 2️⃣ INDEX
  {
    id: "index",
    label: "Index",
    content: (
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          발표 목차
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          오늘 발표는 MingleUp의 <span className="text-pink-500 font-semibold">배경 → 문제 → 해결 → 기술 → 사람 → 비전</span> 순으로 진행됩니다.
        </p>
  
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {[
            { num: "1", title: "Team", desc: "팀 소개" },
            { num: "2", title: "Intro", desc: "왜 MingleUp이 필요한가" },
            { num: "3", title: "Problem", desc: "기존 매칭 서비스의 한계" },
            { num: "4", title: "Solution", desc: "AI 기반 매칭의 혁신" },
            { num: "5", title: "Flow", desc: "사용자 여정 및 기능 흐름" },
            { num: "6", title: "Tech", desc: "React, Spring Boot, AWS 기술" },
            { num: "7", title: "Infra", desc: "클라우드 배포 및 운영 환경" },
            { num: "8", title: "AI Matching", desc: "성향 기반 AI 매칭 로직" },
            { num: "9", title: "Demo", desc: "시연영상" },
            { num: "10", title: "Future", desc: "AI 추천 플랫폼으로의 확장" },
            { num: "11", title: "Roadmap", desc: "성장 방향" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="relative flex items-start gap-4 bg-white/80 border border-pink-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.02 }}
            >
              {/* 번호 배지 */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 font-bold text-lg shadow-sm">
                {item.num}
              </div>
  
              {/* 텍스트 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
  
              {/* 장식 */}
              <div className="absolute right-3 top-3 w-2 h-2 bg-pink-300 rounded-full animate-pulse" />
            </motion.div>
          ))}
        </div>
  
        <p className="text-pink-500 mt-12 font-semibold italic">
          “AI가 만들어주는 새로운 만남의 시작, 지금 시작합니다.”
        </p>
      </motion.div>
    ),
  },

  // 8️⃣ TEAM
  {
    id: "team",
    label: "Team",
    content: (
      <motion.div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">팀 소개</h2>
        <p className="text-gray-700 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
          <span className="font-semibold text-pink-600">MingleUp</span>은 기획부터 개발, 배포까지 전 과정을 함께한 팀의 협업으로 완성되었습니다.
        </p>
  
        {/* ✅ 팀원 카드 레이아웃 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "김태경",
              role: "팀장 / 백엔드 리더",
              desc: "프로젝트 총괄, 백엔드 구조 설계 및 데이터베이스 관리",
              img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
            },
            {
              name: "손성열",
              role: "프론트엔드 리더",
              desc: "전체 UI 설계, 프레젠테이션 페이지 및 주요 컴포넌트 개발",
              img: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
            },
            {
              name: "홍지현",
              role: "프론트엔드 개발자",
              desc: "온보딩 및 로그인 기능 개발, UX 최적화",
              img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
            },
            {
              name: "최광옥",
              role: "프론트엔드 개발자",
              desc: "파티 리스트 / 상세 페이지 구현 및 상태관리 담당",
              img: "https://cdn-icons-png.flaticon.com/512/4140/4140050.png",
            },
            {
              name: "김동현",
              role: "백엔드 개발자",
              desc: "AI 매칭 API 설계, 매칭 로직 및 REST 통신 구조 담당",
              img: "https://cdn-icons-png.flaticon.com/512/4140/4140052.png",
            },
            {
              name: "김현빈",
              role: "인프라 담당",
              desc: "AWS, Docker 환경 구축 및 자동 배포 파이프라인 구성",
              img: "https://cdn-icons-png.flaticon.com/512/4140/4140038.png",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white border border-pink-100 rounded-3xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition transform"
            >
              <div className="w-24 h-24 rounded-full bg-pink-50 border border-pink-100 overflow-hidden mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-pink-500 text-sm font-medium mt-1">{member.role}</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
  
        <p className="text-pink-500 mt-12 font-semibold text-lg italic">
          “각자의 강점을 하나로 — MingleUp은 협업의 시너지로 완성되었습니다.”
        </p>
      </motion.div>
    ),
  },

  // 3️⃣ INTRO
  {
    id: "intro",
    label: "Intro",
    content: (
      <motion.div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">MingleUp이 만들어진 이유</h2>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
          외로움이 사회 문제로 대두되며, 정부와 사회는 새로운 연결의 방식을 찾고 있습니다.<br />
          <span className="font-semibold text-pink-600">MingleUp</span>은 이러한 흐름 속에서 탄생했습니다.
        </p>
        <div className="flex flex-col md:flex-row gap-10 justify-center text-left mt-8">
          <div className="w-full md:w-1/2 bg-white/70 border border-pink-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-pink-500 font-semibold mb-4 text-lg">사회적 배경</h3>
            <ul className="text-gray-600 space-y-3 text-base leading-relaxed">
              <li>• 외로움 대응 정책 확대 — 서울시 ‘마음편의점’ 등 고립 완화 정책 추진</li>
              <li>• 오프라인 만남 회귀 — 앱 피로로 싱글 이벤트·취향 모임 수요 증가</li>
              <li>• 1인 가구 급증 — 800만+ 1인 가구, ‘가벼운 연결’ 니즈 확대</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 bg-white/70 border border-pink-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-pink-500 font-semibold mb-4 text-lg">시장 변화</h3>
            <ul className="text-gray-600 space-y-3 text-base leading-relaxed">
              <li>• 국내 레퍼런스 등장 — 기업 주도 솔로파티 매칭 서비스 사례 증가</li>
              <li>• 기존 매칭은 운영자 수동 그룹 매칭</li>
              <li>• <span className="font-semibold text-pink-600">MingleUp</span>은 AI 매칭을 통해 개인 맞춤형 연결을 실현</li>
            </ul>
          </div>
        </div>
        <p className="text-pink-500 font-semibold mt-10 italic">
          “데이터로 감정을 이해하고, 자연스러운 연결을 만들어냅니다.”
        </p>
      </motion.div>
    ),
  },

  // 4️⃣ PROBLEM
  {
    id: "problem",
    label: "Problem",
    content: (
      <motion.div className="max-w-5xl text-center mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          왜 <span className="text-pink-500">AI 매칭</span>이 필요한가?
        </h2>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed">
          기존 매칭 서비스는 여전히 ‘운’에 의존합니다.<br />
          성향, 대화 스타일, 가치관이 고려되지 않은 연결은<br />
          낮은 만족도와 어색한 경험으로 이어집니다.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "낮은 매칭 효율", desc: "랜덤 매칭은 반복된 실망으로 이어집니다. AI는 데이터로 이 문제를 해결합니다." },
            { title: "감정 없는 연결", desc: "숫자만으로는 케미를 예측할 수 없습니다. MingleUp은 대화 톤까지 분석합니다." },
            { title: "운영자의 부담", desc: "호스트는 승인, 알림, 리뷰 등 반복된 관리 업무를 자동화할 수 있습니다." },
          ].map((item) => (
            <div key={item.title} className="bg-white/70 backdrop-blur border border-pink-100 rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    ),
  },

  // 5️⃣ SOLUTION
  {
    id: "solution",
    label: "Solution",
    content: (
      <motion.div className="max-w-5xl text-center mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          MingleUp의 <span className="text-pink-500">AI 매칭 솔루션</span>
        </h2>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
          사용자의 MBTI, 취향, 대화 패턴을 분석해 AI가 직접 “잘 맞는 사람”을 제안합니다.<br />
          기술의 도움으로 어색하지 않은 첫 만남을 만듭니다.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-white rounded-3xl border border-pink-100 p-8 shadow-lg w-full md:w-1/2 text-left">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">AI Matching Engine</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              ChatGPT API 기반 AI가 성향 데이터를 조합하여 매칭 점수를 계산하고,
              대화 스타일과 주제 적합도를 종합적으로 고려합니다.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-pink-100 p-8 shadow-lg w-full md:w-1/2 text-left">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Host Automation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              승인, 결과 알림, 리뷰 관리 등 운영 절차를 자동화하여 호스트의 부담을 줄이고
              효율적인 파티 운영을 지원합니다.
            </p>
          </div>
        </div>
      </motion.div>
    ),
  },

  // 6️⃣ FLOW
  {
    id: "flow",
    label: "Flow",
    content: (
      <motion.div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">
          사용자 여정 (User Flow)
        </h2>
        <p className="text-gray-700 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
          MingleUp은 사용자의 데이터 입력부터 실제 만남까지,  
          **AI 중심의 자연스러운 여정**으로 설계되어 있습니다.
        </p>
  
        {/* 단계별 플로우 */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
          {[
            {
              title: "1. 간편 로그인",
              desc: "카카오톡 간편 로그인으로 빠르게 시작",
              icon: "💬",
            },
            {
              title: "2. 성향 입력",
              desc: "MBTI, 취향, 관심사 등 AI 분석 데이터 수집",
              icon: "🧠",
            },
            {
              title: "3. 파티 탐색",
              desc: "관심 주제별 솔로 파티 또는 취향 모임 탐색",
              icon: "🎉",
            },
            {
              title: "4. AI 매칭",
              desc: "참가자 간 성향 기반 매칭 점수 계산",
              icon: "🤖",
            },
            {
              title: "5. 결과 안내",
              desc: "카카오 알림톡으로 매칭 결과 즉시 전달",
              icon: "📱",
            },
            {
              title: "6. 후기 & 피드백",
              desc: "참가자 후기를 AI가 학습하여 다음 매칭 개선",
              icon: "⭐",
            },
          ].map((step, i) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center md:w-1/6"
            >
              <div className="bg-white shadow-md border border-pink-100 rounded-3xl p-6 w-36 h-36 flex flex-col justify-center items-center transition hover:shadow-lg hover:-translate-y-1">
                <div className="text-3xl mb-2">{step.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs mt-1 leading-snug">
                  {step.desc}
                </p>
              </div>
  
              {/* 연결 라인 */}
              {i < 5 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full border-t-2 border-dashed border-pink-200 translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
  
        <p className="text-pink-500 font-semibold mt-14 text-lg">
          “가입부터 매칭까지 단 3분, AI가 당신의 케미를 찾아줍니다.”
        </p>
      </motion.div>
    ),
  },
  

  // 7️⃣ TECH
  {
    id: "tech",
    label: "Tech",
    content: (
      <motion.div className="max-w-6xl text-center mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          기술 스택 & 아키텍처
        </h2>
        <p className="text-gray-700 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
          MingleUp은 안정적이고 유연한 구조를 위해 <b>AI 매칭 + 클라우드 인프라 + 실시간 API</b>로 구성되었습니다.
        </p>
  
        {/* ✅ 기술 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend",
              desc: "React, TypeScript, TailwindCSS, Framer Motion으로 UI/UX 구현",
              logos: [
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", alt: "TailwindCSS" },
              ],
            },
            {
              title: "Backend",
              desc: "Spring Boot와 JPA를 사용하여 안정적인 비즈니스 로직 구축",
              logos: [
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring Boot" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
              ],
            },
            {
              title: "Infra",
              desc: "AWS EC2, S3, RDS를 통해 클라우드 배포 및 데이터 관리",
              logos: [
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", alt: "AWS" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
              ],
            },
            {
              title: "AI Engine",
              desc: "ChatGPT API 기반 AI Matching Engine으로 성향 분석 및 케미 매칭 수행",
              logos: [
                { src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", alt: "OpenAI" },
              ],
            },
            {
              title: "External API",
              desc: "Kakao API를 통한 간편 로그인 및 알림톡 기능 구현",
              logos: [
                { src: "https://cdn-icons-png.flaticon.com/512/2111/2111496.png", alt: "Kakao" },
              ],
            },
          ].map((tech) => (
            <div
              key={tech.title}
              className="bg-white border border-pink-100 rounded-3xl shadow-md p-8 hover:shadow-lg hover:scale-105 transition transform flex flex-col justify-between items-center text-center"
            >
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {tech.logos.map((logo, i) => (
                  <img key={i} src={logo.src} alt={logo.alt} className="h-10 w-10 object-contain" />
                ))}
              </div>
              <h3 className="text-xl font-semibold text-pink-600 mb-2">{tech.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
  
        {/* ✅ 하단 구조 설명 */}
        <div className="mt-14 bg-pink-50 border border-pink-100 rounded-3xl p-8 shadow-inner max-w-4xl mx-auto">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">System Architecture</h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <b>Client</b> → React + TypeScript (UI) <br />
            <b>Server</b> → Spring Boot (API / Matching Logic) <br />
            <b>AI</b> → ChatGPT API로 성향 분석 및 매칭 점수 계산 <br />
            <b>Infra</b> → AWS EC2 / S3 / RDS / Docker <br />
            <b>Notification</b> → Kakao 알림톡 API
          </p>
        </div>
  
        <p className="text-pink-500 mt-10 font-semibold text-lg">
          “AI, 클라우드, 그리고 데이터 — 이 세 가지가 MingleUp의 핵심입니다.”
        </p>
      </motion.div>
    ),
  },

  // ☁️ INFRASTRUCTURE
  {
    id: "infra",
    label: "Infra",
    content: (
      <motion.div className="max-w-5xl text-center mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          인프라 & 배포 파이프라인
        </h2>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
          안정적인 배포와 데이터 보안을 위해 AWS 기반으로 설계했습니다.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="rounded-3xl border border-pink-100 p-6 shadow-sm bg-white/80">
            <h3 className="text-pink-600 font-semibold mb-3">AWS EC2 + Docker</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Spring Boot 백엔드는 Docker로 컨테이너화하여 EC2에 배포합니다.<br />
              환경별(개발/운영) Docker Compose로 설정을 분리했습니다.
            </p>
          </div>
          <div className="rounded-3xl border border-pink-100 p-6 shadow-sm bg-white/80">
            <h3 className="text-pink-600 font-semibold mb-3">S3 & RDS</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              이미지 업로드는 S3 <b>Presigned URL</b> 방식으로 처리하며,<br />
              데이터는 AWS RDS(MySQL)에 안전하게 저장합니다.
            </p>
          </div>
          <div className="rounded-3xl border border-pink-100 p-6 shadow-sm bg-white/80">
            <h3 className="text-pink-600 font-semibold mb-3">CI/CD 계획</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              GitHub Actions를 통한 자동 빌드/배포 파이프라인을 준비 중입니다.<br />
              코드 푸시 → 테스트 → 이미지 빌드 → 배포까지 자동화 예정입니다.
            </p>
          </div>
        </div>

        <p className="mt-8 text-pink-500 font-semibold italic">
          “인프라의 목표는 안정성보다 ‘지속 가능한 개발 환경’입니다.”
        </p>
      </motion.div>
    ),
  },

  // 🤖 AI MATCHING
  {
    id: "ai",
    label: "AI Matching",
    content: (
      <motion.div className="max-w-5xl text-center mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          AI 매칭 로직
        </h2>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
          단순한 조건 매칭이 아닌, <b>대화 스타일과 성향 데이터</b>를 기반으로 매칭 적합도를 계산합니다.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="rounded-3xl border border-pink-100 p-6 shadow-sm bg-white/80">
            <h3 className="text-pink-600 font-semibold mb-3">1️⃣ 데이터 수집</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              가입 시 입력한 MBTI, 취향, 대화 톤, 관심 주제 등의 데이터를 기반으로
              사용자 프로파일을 생성합니다.
            </p>
          </div>
          <div className="rounded-3xl border border-pink-100 p-6 shadow-sm bg-white/80">
            <h3 className="text-pink-600 font-semibold mb-3">2️⃣ AI 적합도 계산</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              ChatGPT API를 통해 각 참가자의 대화 톤과 주제 호환성을 분석합니다.<br />
              Prompt 내에서 <b>상호 관심도 스코어</b>를 계산해 매칭 후보를 정렬합니다.
            </p>
          </div>
          <div className="rounded-3xl border border-pink-100 p-6 shadow-sm bg-white/80">
            <h3 className="text-pink-600 font-semibold mb-3">3️⃣ 결과 전달</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              매칭 결과를 JSON 형태로 백엔드에 반환하고, Kakao 알림을 통해 사용자에게 전달합니다.
            </p>
          </div>
        </div>

        <p className="mt-8 text-pink-500 font-semibold italic">
          “AI는 사람을 대체하지 않습니다. 대신, 더 잘 연결되게 만듭니다.”
        </p>
      </motion.div>
    ),
  },

  // 🎬 DEMO
  {
    id: "demo",
    label: "Demo",
    content: (
      <motion.div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          시연 영상 (Demo)
        </h2>

        <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
          실제로 MingleUp이 어떻게 작동하는지 보여드리겠습니다.<br />
          AI 매칭부터 결과 알림까지, 한 번의 흐름을 직접 확인하세요.
        </p>

        {/* 🎥 데모 영상 영역 */}
        <div className="relative bg-gray-50 border border-pink-100 rounded-3xl shadow-md overflow-hidden max-w-4xl mx-auto aspect-video">
          <video
            controls
            poster="/demo-thumbnail.png"
            className="w-full h-full object-cover"
          >
            <source src="/demo.mp4" type="video/mp4" />
            브라우저가 video 태그를 지원하지 않습니다.
          </video>

          {/* 재생 안내 오버레이 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white backdrop-blur-sm pointer-events-none">
            <span className="text-3xl font-bold">🎬 Demo Video</span>
            <span className="text-sm mt-2 opacity-90">
              클릭하여 영상을 재생하세요
            </span>
          </div>
        </div>

        {/* 🎯 핵심 데모 포인트 */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {[
            {
              icon: "🤖",
              title: "AI 매칭 시연",
              desc: "사용자 입력 → ChatGPT API → 매칭 결과 생성 과정을 보여줍니다.",
            },
            {
              icon: "💌",
              title: "Kakao 알림 연동",
              desc: "매칭 결과가 카카오톡으로 전달되는 과정을 실시간 확인할 수 있습니다.",
            },
            {
              icon: "📊",
              title: "대시보드 미리보기",
              desc: "호스트가 파티 신청과 매칭 현황을 관리하는 화면을 시연합니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-pink-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-pink-500 mt-10 font-semibold italic">
          “AI가 당신의 케미를 찾아가는 과정을 함께 보시죠.”
        </p>
      </motion.div>
    ),
  },


  // 🔮 FUTURE
  {
    id: "future",
    label: "Future",
    content: (
      <motion.div className="max-w-4xl text-center mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          향후 기술 확장 계획
        </h2>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
          MingleUp은 단순한 매칭 플랫폼을 넘어, <b>AI 관계 추천 플랫폼</b>으로 발전할 계획입니다.
        </p>

        <ul className="text-left text-gray-700 text-lg space-y-3">
          <li>• <b>AI 고도화</b>: GPT 기반 감정 분석 → Fine-tuned 모델 적용</li>
          <li>• <b>추천 알고리즘</b>: 협업 필터링 및 NLP 기반 취향 추천</li>
          <li>• <b>실시간 알림</b>: WebSocket 기반 실시간 매칭 알림</li>
          <li>• <b>IaC 도입</b>: Terraform으로 AWS 인프라 자동화</li>
          <li>• <b>데이터 파이프라인</b>: 사용자 후기 기반 AI 재학습 루프 구축</li>
        </ul>

        <p className="text-pink-500 mt-8 font-semibold italic">
          “AI가 연결을 만들고, 데이터가 관계를 완성합니다.”
        </p>
      </motion.div>
    ),
  },


  // 9️⃣ ROADMAP
  {
    id: "roadmap",
    label: "Roadmap",
    content: (
      <motion.div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Roadmap</h2>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
          MingleUp은 <b>단기 검증 → 기능 확장 → 플랫폼화</b>의 3단계로 성장합니다.
        </p>
  
        {/* 진행도 표시 (예: 55%) */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>진행도</span>
            <span className="font-medium text-pink-600">55%</span>
          </div>
          <div className="w-full h-3 bg-pink-50 rounded-full overflow-hidden border border-pink-100">
            <div className="h-full bg-gradient-to-r from-pink-300 to-pink-500" style={{ width: "55%" }} />
          </div>
        </div>
  
        {/* 타임라인 */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 1단계 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-xl shadow-sm mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">단기 (MVP)</h3>
            <p className="text-gray-500 text-sm mb-3">~ 1Q</p>
            <div className="bg-white border border-pink-100 rounded-3xl p-6 shadow-sm text-left w-full">
              <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
                <li>• 핵심 플로우 완성: 로그인 → 성향 입력 → 파티 신청</li>
                <li>• AI 매칭 점수 계산(베타) · 알림톡 연동</li>
                <li>• 리뷰 수집 및 정량 지표 정의</li>
              </ul>
              <div className="mt-4 inline-flex items-center gap-2 text-xs bg-pink-50 text-pink-600 px-3 py-1 rounded-full border border-pink-100">
                진행 중
              </div>
            </div>
  
            {/* 연결 라인 (데스크탑에서만 보이게) */}
            <div className="hidden md:block absolute right-[-16px] top-6 w-8 h-0.5 bg-pink-200" />
          </div>
  
          {/* 2단계 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-xl shadow-sm mb-4">📈</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">중기 (확장)</h3>
            <p className="text-gray-500 text-sm mb-3">2Q ~ 3Q</p>
            <div className="bg-white border border-pink-100 rounded-3xl p-6 shadow-sm text-left w-full">
              <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
                <li>• 도메인 확장: 소개팅 / 취미 / 스터디 모임</li>
                <li>• 매칭 특성 강화: 대화 톤/주제 선호도 반영</li>
                <li>• 호스트 운영 자동화 고도화 (승인·공지·후기)</li>
              </ul>
              <div className="mt-4 inline-flex items-center gap-2 text-xs bg-pink-50 text-pink-600 px-3 py-1 rounded-full border border-pink-100">
                계획
              </div>
            </div>
  
            <div className="hidden md:block absolute right-[-16px] top-6 w-8 h-0.5 bg-pink-200" />
          </div>
  
          {/* 3단계 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-xl shadow-sm mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">장기 (플랫폼)</h3>
            <p className="text-gray-500 text-sm mb-3">4Q+</p>
            <div className="bg-white border border-pink-100 rounded-3xl p-6 shadow-sm text-left w-full">
              <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
                <li>• AI Relationship Platform로 확장</li>
                <li>• 추천 피드 & 지속 관계를 위한 리텐션 기능</li>
                <li>• 데이터 기반 매칭 모델 상시 개선 파이프라인</li>
              </ul>
              <div className="mt-4 inline-flex items-center gap-2 text-xs bg-pink-50 text-pink-600 px-3 py-1 rounded-full border border-pink-100">
                비전
              </div>
            </div>
          </div>
        </div>
  
        {/* 하단 라벨 & 액션 */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-gray-600 text-sm">
            핵심 지표: 매칭 수락률, 파티 만족도, 후기 참여율, 재참여율
          </p>
        </div>
      </motion.div>
    ),
  },

  // 🔟 CLOSING
  {
    id: "closing",
    label: "Closing",
    content: (
      <motion.div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          AI가 만들어주는 새로운 만남의 시작,{" "}
          <span className="text-pink-500">MingleUp</span>
        </h2>
        <p className="text-gray-700 mb-8">
          사람과 사람의 연결, 그것이 우리가 기술을 사용하는 이유입니다.<br />
          지금, 당신의 리듬에 맞춘 만남을 시작해보세요.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/Goorm-MingleUp"
            className="px-6 py-3 border border-pink-300 text-gray-800 rounded-full hover:bg-pink-50 transition"
          >
            GitHub 바로가기
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-6 py-3 bg-pink-300 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
          >
            처음으로
          </button>
        </div>
      </motion.div>
    ),
  },
];

function NavBar({ items, current, onJump }: NavBarProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-pink-100">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        {/* 왼쪽 로고 */}
        <button onClick={() => onJump(0)} className="flex items-center gap-3">
          <img src="/Logo.svg" alt="MingleUp Logo" className="h-10 w-auto" />
          <span className="font-bold text-gray-800 text-lg">MingleUp</span>
        </button>

        {/* 중앙 네비게이션 */}
        <nav className="hidden md:flex items-center justify-center flex-grow gap-5">
          {items.map((s, i) => (
            <button
              key={s.id}
              onClick={() => onJump(i)}
              className={`text-sm border-b-2 pb-1 transition ${
                current === i
                  ? "text-pink-500 border-pink-400 font-semibold"
                  : "text-gray-700 border-transparent hover:text-pink-500"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* ✅ 오른쪽 끝 GitHub 버튼 */}
        <a
          href="https://github.com/Goorm-MingleUp"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto px-5 py-2 rounded-full text-sm font-semibold border border-pink-200 text-gray-700 hover:bg-pink-50 transition"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}


export default function App() {
  const [index, setIndex] = React.useState(0);

  const next = React.useCallback(
    () => setIndex((i) => (i + 1 < slides.length ? i + 1 : i)),
    []
  );
  const prev = React.useCallback(
    () => setIndex((i) => (i - 1 >= 0 ? i - 1 : i)),
    []
  );
  const jump = (i: number) => setIndex(i);

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center font-pretendard bg-white text-gray-900">
      <NavBar items={slides} current={index} onJump={jump} />
      <main className="grow flex items-center justify-center w-full px-6 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            {slides[index].content}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

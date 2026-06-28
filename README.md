# 해모루마을 분양 소개 사이트

경기도 고양시 덕양구 내유동 136-2번지 일원, 35세대 단독주택 전원단지
'해모루마을'을 소개하는 정적 홍보 페이지입니다.

## 파일 구성

```
.
├── index.html      메인 페이지
├── style.css       디자인/레이아웃
├── script.js       스크롤 효과, 모바일 메뉴, 상담 폼
└── images/         단지 이미지
    ├── hero-main.jpg          히어로 메인 이미지
    ├── location-map.jpg       광역 교통망 지도
    ├── site-plan.jpg          35세대 배치도 + 스펙표
    ├── aerial-view.jpg        입지 항공뷰
    ├── logo-horizontal.png    해모루마을 로고 (가로형)
    ├── gallery-exterior-1~4.jpg   실제 준공 외관 사진
    └── gallery-interior-1.jpg     실제 내부 인테리어 예시 사진
```

## GitHub Pages로 올리는 방법

1. GitHub에서 새 저장소(Repository)를 만듭니다. (예: `haemoru-village`)
2. 이 폴더의 파일/폴더 전체를 그 저장소에 업로드합니다.
   - 깃허브 웹사이트에서: 저장소 페이지 → **Add file → Upload files** →
     `index.html`, `style.css`, `script.js`, `images` 폴더를 한 번에 드래그
3. 저장소의 **Settings → Pages**로 이동합니다.
4. **Source**에서 `Deploy from a branch`를 선택하고, 브랜치는 `main`(또는 `master`),
   폴더는 `/ (root)`로 지정한 뒤 **Save**를 누릅니다.
5. 1~2분 후 같은 페이지 상단에 사이트 주소가 표시됩니다.
   보통 `https://[깃허브계정명].github.io/[저장소이름]/` 형태입니다.

## 나중에 수정하고 싶을 때

- **상담 문의 전화번호**: `index.html`에서 `대표전화 000-0000-0000` 부분을 실제 번호로 변경
- **상담 폼 (이메일 수신)**: Formspree로 연동되어 있어 `skkusdet4289@gmail.com`으로
  실제 문의가 도착합니다. 자세한 내용은 아래 "상담 폼 안내"를 참고하세요.
- **이미지 교체**: `images/` 폴더의 파일명을 그대로 유지한 채 같은 이름으로
  덮어쓰면 디자인을 그대로 유지하며 이미지만 바꿀 수 있습니다.

## 상담 폼 안내 (Formspree)

상담 신청 폼은 [Formspree](https://formspree.io)를 통해
`skkusdet4289@gmail.com`으로 문의 내용이 전달되도록 연동되어 있습니다.

1. 사이트를 GitHub Pages에 올린 후, 폼을 통해 테스트 문의를 1번 보내보세요.
2. 그러면 `skkusdet4289@gmail.com`으로 Formspree에서 **"확인(Confirm) 메일"**이
   1통 도착합니다. (실제 문의 내용이 아니라 본인 인증용 메일입니다.)
3. 그 메일을 열어 확인 버튼을 눌러야, 그 다음부터 실제 상담 신청 내용이
   메일로 전달됩니다. (이 확인은 딱 한 번만 하면 됩니다.)
4. 이후로는 누군가 사이트에서 상담 신청을 누를 때마다 성함/연락처/문의내용이
   지메일로 도착합니다. 무료 플랜은 월 50건까지 받을 수 있습니다.
5. 더 세밀한 관리(자동 답장, 스팸 필터, 여러 명에게 동시 발송 등)가
   필요하면 formspree.io에 무료 가입 후 정식 Form을 만들어 ID를 발급받고,
   `index.html`의 `action="https://formspree.io/f/skkusdet4289@gmail.com"` 부분을
   발급받은 주소(`https://formspree.io/f/발급된ID`)로 바꿔주시면 됩니다.

## 참고

페이지에 사용된 조감도·배치도 이미지는 기본 조감도로, 실제 분양 시 개별
설계·시공에 따라 외관과 형태가 달라질 수 있다는 안내문을 단지배치 섹션에
포함해 두었습니다.

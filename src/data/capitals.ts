export interface Capital {
  city: string;
  country: string;
}

// 一般的な首都（かんたん・ふつうモード用）
export const commonCapitals: Capital[] = [
  { city: "東京", country: "日本" },
  { city: "ロンドン", country: "イギリス" },
  { city: "パリ", country: "フランス" },
  { city: "ベルリン", country: "ドイツ" },
  { city: "ローマ", country: "イタリア" },
  { city: "マドリード", country: "スペイン" },
  { city: "モスクワ", country: "ロシア" },
  { city: "北京", country: "中華人民共和国" },
  { city: "ワシントンD.C.", country: "アメリカ合衆国" },
  { city: "オタワ", country: "カナダ" },
  { city: "メキシコシティ", country: "メキシコ" },
  { city: "ブラジリア", country: "ブラジル" },
  { city: "ブエノスアイレス", country: "アルゼンチン" },
  { city: "キャンベラ", country: "オーストラリア" },
  { city: "ウェリントン", country: "ニュージーランド" },
  { city: "ソウル", country: "韓国" },
  { city: "シンガポール", country: "シンガポール" },
  { city: "バンコク", country: "タイ" },
  { city: "デリー", country: "インド" },
  { city: "カイロ", country: "エジプト" },
  { city: "アムステルダム", country: "オランダ" },
  { city: "ブリュッセル", country: "ベルギー" },
  { city: "ウィーン", country: "オーストリア" },
  { city: "ストックホルム", country: "スウェーデン" },
  { city: "コペンハーゲン", country: "デンマーク" },
  { city: "オスロ", country: "ノルウェー" },
  { city: "ヘルシンキ", country: "フィンランド" },
  { city: "ワルシャワ", country: "ポーランド" },
  { city: "プラハ", country: "チェコ" },
  { city: "ブダペスト", country: "ハンガリー" },
  { city: "アテネ", country: "ギリシャ" },
  { city: "アンカラ", country: "トルコ" },
  { city: "リスボン", country: "ポルトガル" },
  { city: "ダブリン", country: "アイルランド" },
  { city: "キエフ", country: "ウクライナ" },
  { city: "テヘラン", country: "イラン" },
  { city: "バグダッド", country: "イラク" },
  { city: "リヤド", country: "サウジアラビア" },
  { city: "アブダビ", country: "アラブ首長国連邦" },
  { city: "ドーハ", country: "カタール" },
  { city: "イスラマバード", country: "パキスタン" },
  { city: "カトマンズ", country: "ネパール" },
  { city: "ダッカ", country: "バングラデシュ" },
  { city: "ジャカルタ", country: "インドネシア" },
  { city: "マニラ", country: "フィリピン" },
  { city: "ハノイ", country: "ベトナム" },
  { city: "クアラルンプール", country: "マレーシア" },
  { city: "プレトリア", country: "南アフリカ共和国" },
  { city: "ナイロビ", country: "ケニア" },
  { city: "アディスアベバ", country: "エチオピア" }
];

// CSVから取得した全ての首都（むずかしい・IMPOSSIBLEモード用）
export const allCapitals: Capital[] = [
  { city: "バチカン", country: "バチカン市国" },
  { city: "アロフィ", country: "ニウエ" },
  { city: "サンマリノ", country: "サンマリノ" },
  { city: "ファドーツ", country: "リヒテンシュタイン" },
  { city: "ルクセンブルク", country: "ルクセンブルク" },
  { city: "パリキール", country: "ミクロネシア" },
  { city: "マジュロ", country: "マーシャル諸島" },
  { city: "フナフティ", country: "ツバル" },
  { city: "マルキョク", country: "パラオ" },
  { city: "モナコ", country: "モナコ" },
  { city: "タラワ", country: "キリバス" },
  { city: "モロニ", country: "コモロ" },
  { city: "アンドラ", country: "アンドラ" },
  { city: "アバルア", country: "クック諸島" },
  { city: "ポートオブスペイン", country: "トリニダード・トバゴ" },
  { city: "キガリ", country: "ルワンダ" },
  { city: "ムババーネ", country: "エスワティニ" },
  { city: "ジュバ", country: "南スーダン" },
  { city: "リュブリャナ", country: "スロベニア" },
  { city: "ブラチスラバ", country: "スロバキア" },
  { city: "ドーハ", country: "カタール" },
  { city: "ポドゴリツァ", country: "モンテネグロ" },
  { city: "ベルン", country: "スイス" },
  { city: "プリシュティナ", country: "コソボ" },
  { city: "ロゾー", country: "ドミニカ" },
  { city: "ジブチ", country: "ジブチ" },
  { city: "バンジュール", country: "ガンビア" },
  { city: "スコピエ", country: "北マケドニア" },
  { city: "ブリッジタウン", country: "バルバドス" },
  { city: "ブジュンブラ", country: "ブルンジ" },
  { city: "キングスタウン", country: "セントビンセント・グレナディーン諸島" },
  { city: "カストリーズ", country: "セントルシア" },
  { city: "バセテール", country: "セントクリストファー・ネーヴィス" },
  { city: "ポートルイス", country: "モーリシャス" },
  { city: "セントジョージズ", country: "グレナダ" },
  { city: "マナーマ", country: "バーレーン" },
  { city: "セントジョンズ", country: "アンティグア・バーブーダ" },
  { city: "モンテビデオ", country: "ウルグアイ" },
  { city: "ロメ", country: "トーゴ" },
  { city: "チュニス", country: "チュニジア" },
  { city: "アブダビ", country: "アラブ首長国連邦" },
  { city: "アシガバット", country: "トルクメニスタン" },
  { city: "ルサカ", country: "ザンビア" },
  { city: "ハラレ", country: "ジンバブエ" },
  { city: "ディリ", country: "東ティモール" },
  { city: "ポートビラ", country: "バヌアツ" },
  { city: "テグシガルパ", country: "ホンジュラス" },
  { city: "ジョージタウン", country: "ガイアナ" },
  { city: "レイキャビク", country: "アイスランド" },
  { city: "ポルトープランス", country: "ハイチ" },
  { city: "カンパラ", country: "ウガンダ" },
  { city: "パラマリボ", country: "スリナム" },
  { city: "ニアメ", country: "ニジェール" },
  { city: "ドゥシャンベ", country: "タジキスタン" },
  { city: "アスンシオン", country: "パラグアイ" },
  { city: "マナグア", country: "ニカラグア" },
  { city: "フリータウン", country: "シエラレオネ" },
  { city: "イスラマバード", country: "パキスタン" },
  { city: "カトマンズ", country: "ネパール" },
  { city: "プレトリア", country: "南アフリカ共和国" },
  { city: "ポートモレスビー", country: "パプアニューギニア" },
  { city: "ホニアラ", country: "ソロモン諸島" },
  { city: "パナマシティ", country: "パナマ" },
  { city: "ラバト", country: "モロッコ" },
  { city: "キシニョフ", country: "モルドバ" },
  { city: "マプト", country: "モザンビーク" },
  { city: "モガディシュ", country: "ソマリア" },
  { city: "マスカット", country: "オマーン" },
  { city: "スリジャヤワルダナプラコッテ", country: "スリランカ" },
  { city: "ウランバートル", country: "モンゴル" },
  { city: "ウィントフック", country: "ナミビア" },
  { city: "アブジャ", country: "ナイジェリア" },
  { city: "ビサウ", country: "ギニアビサウ" },
  { city: "アンマン", country: "ヨルダン" },
  { city: "ビリニュス", country: "リトアニア" },
  { city: "リガ", country: "ラトビア" },
  { city: "ビシュケク", country: "キルギス" },
  { city: "マセル", country: "レソト" },
  { city: "アンタナナリボ", country: "マダガスカル" },
  { city: "キト", country: "エクアドル" },
  { city: "サンホセ", country: "コスタリカ" },
  { city: "サンサルバドル", country: "エルサルバドル" },
  { city: "キングストン", country: "ジャマイカ" },
  { city: "ンジャメナ", country: "チャド" },
  { city: "マラボ", country: "赤道ギニア" },
  { city: "アスマラ", country: "エリトリア" },
  { city: "ザグレブ", country: "クロアチア" },
  { city: "タリン", country: "エストニア" },
  { city: "リロングウェ", country: "マラウイ" },
  { city: "グアテマラシティ", country: "グアテマラ" },
  { city: "リーブルビル", country: "ガボン" },
  { city: "スバ", country: "フィジー" },
  { city: "ヌアクショット", country: "モーリタニア" },
  { city: "バマコ", country: "マリ" },
  { city: "ベイルート", country: "レバノン" },
  { city: "トビリシ", country: "ジョージア" },
  { city: "アスタナ", country: "カザフスタン" },
  { city: "ビエンチャン", country: "ラオス" },
  { city: "ブラザビル", country: "コンゴ共和国" },
  { city: "コナクリ", country: "ギニア" },
  { city: "ヤムスクロ", country: "コートジボワール" },
  { city: "オタワ", country: "カナダ" },
  { city: "ベオグラード", country: "セルビア" },
  { city: "バンダルスリブガワン", country: "ブルネイ" },
  { city: "ベルモパン", country: "ベリーズ" },
  { city: "バンギ", country: "中央アフリカ" },
  { city: "ヤウンデ", country: "カメルーン" },
  { city: "ティラナ", country: "アルバニア" },
  { city: "エレバン", country: "アルメニア" },
  { city: "バクー", country: "アゼルバイジャン" },
  { city: "プノンペン", country: "カンボジア" },
  { city: "ラパス", country: "ボリビア" },
  { city: "ポルトノボ", country: "ベナン" },
  { city: "ソフィア", country: "ブルガリア" },
  { city: "ミンスク", country: "ベラルーシ" },
  { city: "ティンプー", country: "ブータン" },
  { city: "ハボローネ", country: "ボツワナ" },
  { city: "キャンベラ", country: "オーストラリア" },
  { city: "ワガドゥグー", country: "ブルキナファソ" },
  { city: "サラエボ", country: "ボスニア・ヘルツェゴビナ" },
  { city: "ネーピードー", country: "ミャンマー" },
  { city: "ヌクアロファ", country: "トンガ" },
  { city: "ビクトリア", country: "セーシェル" },
  { city: "サントメ", country: "サントメ・プリンシペ" },
  { city: "アピア", country: "サモア" },
  { city: "バレッタ", country: "マルタ" },
  { city: "マレ", country: "モルディブ" },
  { city: "エルサレム", country: "イスラエル" },
  { city: "プライア", country: "カーボベルデ" },
  { city: "ナッソー", country: "バハマ" },
  { city: "ニコシア", country: "キプロス" },
  { city: "ウェリントン", country: "ニュージーランド" },
  { city: "ハノイ", country: "ベトナム" },
  { city: "アンカラ", country: "トルコ" },
  { city: "ブダペスト", country: "ハンガリー" },
  { city: "サヌア", country: "イエメン" },
  { city: "ブカレスト", country: "ルーマニア" },
  { city: "ダマスカス", country: "シリア" },
  { city: "リスボン", country: "ポルトガル" },
  { city: "ハルツーム", country: "スーダン" },
  { city: "オスロ", country: "ノルウェー" },
  { city: "ワルシャワ", country: "ポーランド" },
  { city: "平壌", country: "朝鮮民主主義人民共和国" },
  { city: "ダルエスサラーム", country: "タンザニア" },
  { city: "ダブリン", country: "アイルランド" },
  { city: "モンロビア", country: "リベリア" },
  { city: "クアラルンプール", country: "マレーシア" },
  { city: "ハバナ", country: "キューバ" },
  { city: "プラハ", country: "チェコ" },
  { city: "クウェート", country: "クウェート" },
  { city: "サントドミンゴ", country: "ドミニカ共和国" },
  { city: "アクラ", country: "ガーナ" },
  { city: "トリポリ", country: "リビア" },
  { city: "ヘルシンキ", country: "フィンランド" },
  { city: "コペンハーゲン", country: "デンマーク" },
  { city: "ブラジリア", country: "ブラジル" },
  { city: "ブリュッセル", country: "ベルギー" },
  { city: "ダッカ", country: "バングラデシュ" },
  { city: "ルアンダ", country: "アンゴラ" },
  { city: "アルジェ", country: "アルジェリア" },
  { city: "カラカス", country: "ベネズエラ" },
  { city: "キエフ", country: "ウクライナ" },
  { city: "タシケント", country: "ウズベキスタン" },
  { city: "マドリード", country: "スペイン" },
  { city: "ストックホルム", country: "スウェーデン" },
  { city: "バンコク", country: "タイ" },
  { city: "リマ", country: "ペルー" },
  { city: "ダカール", country: "セネガル" },
  { city: "アムステルダム", country: "オランダ" },
  { city: "ソウル", country: "韓国" },
  { city: "マニラ", country: "フィリピン" },
  { city: "ベルリン", country: "ドイツ" },
  { city: "キンシャサ", country: "コンゴ民主共和国" },
  { city: "デリー", country: "インド" },
  { city: "アテネ", country: "ギリシャ" },
  { city: "バグダッド", country: "イラク" },
  { city: "アディスアベバ", country: "エチオピア" },
  { city: "テヘラン", country: "イラン" },
  { city: "ブエノスアイレス", country: "アルゼンチン" },
  { city: "カブール", country: "アフガニスタン" },
  { city: "ウィーン", country: "オーストリア" },
  { city: "ワシントンD.C.", country: "アメリカ合衆国" },
  { city: "ロンドン", country: "イギリス" },
  { city: "リヤド", country: "サウジアラビア" },
  { city: "モスクワ", country: "ロシア" },
  { city: "メキシコシティ", country: "メキシコ" },
  { city: "ローマ", country: "イタリア" },
  { city: "北京", country: "中華人民共和国" },
  { city: "ナイロビ", country: "ケニア" },
  { city: "ジャカルタ", country: "インドネシア" },
  { city: "ボゴタ", country: "コロンビア" },
  { city: "カイロ", country: "エジプト" },
  { city: "東京", country: "日本" },
  { city: "パリ", country: "フランス" },
  { city: "サンティアゴ", country: "チリ" },
  { city: "シンガポール", country: "シンガポール" },
  { city: "ヤレン", country: "ナウル" }
];

// クイズで使用する首都のリストを取得する関数
export function getCapitals(difficulty: number): Capital[] {
  // かんたん・ふつうモードの場合は一般的な首都のみ
  if (difficulty === 1 || difficulty === 2) {
    return commonCapitals;
  }
  // むずかしい・IMPOSSIBLEモードの場合は全ての首都
  return allCapitals;
}
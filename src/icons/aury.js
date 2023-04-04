const Aury = {
  symbol: 'aury',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle fill="#E756CC" cx="16" cy="16" r="16"/><path d="M12.77 16.533c.095.225.19.448.29.67.091.211.188.42.281.63l.214.488c.074.167.152.334.228.5l.187.42.286.644c.168.37.33.742.495 1.113.2.439.386.883.59 1.32.248.499.428 1.021.653 1.528.225-.61.471-1.2.743-1.791.169-.372.33-.747.5-1.12.133-.294.259-.593.39-.89.13-.292.265-.583.39-.876l.13-.281c.073-.164.145-.328.219-.491.074-.167.146-.335.221-.501.115-.253.227-.508.34-.763a14.4 14.4 0 00.258-.599c-2.138-.003-4.277-.003-6.415 0zm7.718-2.84H11.5l.938 2.253h7.017l1.032-2.254zm6.642-2.105c.22.533.394 1.083.532 1.642a10.487 10.487 0 00-1.867-.139c-.477-.008-.962.045-1.436 0l-.04-.163c.16-.217.367-.382.594-.526.666-.42 1.432-.724 2.217-.814zm-15.216-6.5c1.352.433 2.778.67 4.114 1.146.19.09.41.105.418.358-1.113.177-2.197.182-3.318.268-1.199.08-2.364.198-3.567.038-.375-.03-.755-.122-1.13-.11a12.496 12.496 0 013.001-1.778c.176-.035.317.031.482.078zm9.13 12.104c-.083.187-.168.372-.253.557-.094.208-.19.418-.286.625-.09.197-.176.395-.266.591-.154.332-.308.664-.457.999-.157.341-.31.684-.47 1.024l-.575 1.258c-.144.308-.282.618-.423.927-.233.523-.477 1.041-.715 1.562-.222.513-.462 1.018-.692 1.526-.264.58-.528 1.161-.798 1.739-.106 0-.212 0-.318-.002-.298-.663-.606-1.322-.901-1.986-.21-.472-.43-.939-.64-1.41-.191-.43-.39-.856-.582-1.286l-.465-1.024c-.21-.482-.437-.957-.651-1.438-.19-.424-.385-.846-.573-1.271-.075-.165-.149-.33-.225-.494-.131-.3-.27-.593-.405-.891-.096-.214-.196-.426-.292-.641l-.216-.48c-.08-.183-.163-.364-.25-.544-2.197-.005-4.394.005-6.591-.004v-.61c2.102-.004 4.203.005 6.304-.004a9.544 9.544 0 00-.22-.527c-.125-.264-.24-.53-.361-.795-.107-.234-.21-.47-.32-.703-.15-.322-.291-.649-.442-.972-.18-.388-.346-.784-.533-1.169-1 .162-1.934.54-2.73 1.165l-.017.012c-.343.247-.648.57-.942.876a6.717 6.717 0 00-.648.819 11.784 11.784 0 011.948-5.219c.454.395 1.007.65 1.62.618-.259-.574-.534-1.141-.775-1.722.467-.55.991-1.049 1.547-1.51.405.977.854 1.937 1.277 2.906.055.152.192.136.324.185.343.079.584.28.894.432.353.181.767.273 1.157.343.164.033.33.052.497.07l.043.1c-.748.203-1.494.215-2.261.251.064.259.174.497.286.738 3.548.007 7.096-.004 10.644.005.234-.465.43-.948.655-1.417-.655.227-1.308.441-1.994.557-.113.014-.232.014-.346.014.161-.1.328-.187.499-.27.747-.353 1.476-.76 2.153-1.232.196-.133.242-.326.338-.528.324-.718.641-1.44.967-2.156.941.767 1.77 1.667 2.44 2.677-.44-.182-.872-.223-1.345-.181l-.792 1.733c-.155.347-.319.69-.474 1.037l-.492 1.077c-.117.262-.245.52-.353.785-.134.253-.24.52-.364.779-.12.259-.23.521-.353.78-.072.145-.14.293-.207.441 2.125.01 4.25.001 6.375.005.003.205-.001.409-.008.612-2.21.004-4.421-.002-6.631.004-.116.213-.216.437-.317.657z" fill="#FFF"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.564 6.786c-.326.717-.643 1.438-.967 2.156-.096.202-.142.395-.338.528a14.79 14.79 0 01-2.153 1.232c-.17.083-.338.17-.5.27.115 0 .234 0 .347-.014.686-.116 1.339-.33 1.994-.557-.225.469-.421.952-.655 1.417-3.548-.01-7.096.002-10.644-.005a4.135 4.135 0 01-.286-.738c.767-.036 1.513-.048 2.26-.251l-.042-.1a5.12 5.12 0 01-.497-.07c-.39-.07-.804-.162-1.157-.343-.31-.151-.55-.353-.894-.432-.132-.049-.269-.033-.324-.185-.423-.969-.872-1.929-1.277-2.905-.556.46-1.08.959-1.547 1.509.24.58.516 1.148.776 1.722-.614.033-1.167-.223-1.62-.618a11.784 11.784 0 00-1.95 5.219c.19-.292.417-.562.65-.82.293-.304.598-.628.94-.875l.018-.012c.796-.626 1.73-1.003 2.73-1.165.187.385.353.78.533 1.169.15.323.291.65.442.972.11.233.213.47.32.703.12.265.236.531.36.795.08.173.152.35.221.527-2.101.009-4.202 0-6.304.004v.61c2.197.01 4.394-.001 6.59.004.088.18.17.361.25.543l.217.48c.096.216.196.428.292.642.134.298.274.592.405.89l.225.495c.188.425.382.847.573 1.271.214.481.441.956.651 1.438l.465 1.024c.192.43.391.856.582 1.286.21.471.43.938.64 1.41.295.664.603 1.323.901 1.986.106.002.212.002.318.002.27-.578.534-1.158.798-1.739.23-.508.47-1.013.692-1.526.238-.52.482-1.04.715-1.562.14-.309.279-.62.423-.927l.575-1.258c.16-.34.313-.683.47-1.024.149-.335.303-.667.457-.999.09-.196.177-.394.266-.59a99.843 99.843 0 00.538-1.183c.1-.22.2-.444.317-.657 2.21-.006 4.421 0 6.63-.004.008-.203.012-.407.01-.612-2.126-.004-4.25.005-6.376-.005.067-.148.135-.296.207-.442.122-.258.233-.52.353-.78.124-.258.23-.525.364-.778.108-.266.236-.523.353-.785l.492-1.077c.155-.348.319-.69.474-1.037l.792-1.733c.473-.042.905-.001 1.346.181-.671-1.01-1.5-1.91-2.441-2.677zm-7.587 9.746l3.208.002c-.08.202-.168.4-.258.6-.113.254-.224.509-.34.762-.075.166-.147.334-.221.5l-.219.492-.13.28c-.125.294-.26.585-.39.878-.131.296-.257.595-.39.89-.17.372-.331.747-.5 1.119-.272.59-.518 1.182-.743 1.79-.225-.506-.405-1.028-.653-1.527-.204-.437-.39-.881-.59-1.32-.166-.371-.327-.743-.495-1.113-.094-.215-.19-.43-.286-.644l-.187-.42c-.076-.166-.154-.333-.228-.5l-.214-.488c-.093-.21-.19-.419-.282-.63a43.508 43.508 0 01-.29-.67c2.14-.002 4.278-.002 6.416.001zm4.51-2.84l-1.03 2.254h-7.018l-.938-2.254h8.987zm6.643-2.104c-.785.09-1.551.395-2.217.814-.227.144-.433.31-.595.526l.04.162c.475.046.96-.007 1.437.001.626-.008 1.25.036 1.867.139a11.723 11.723 0 00-.532-1.642zM11.534 5l-.102.01a12.496 12.496 0 00-3 1.779c.374-.013.754.08 1.13.11 1.202.159 2.367.042 3.566-.039 1.121-.086 2.205-.091 3.318-.268-.009-.253-.229-.268-.418-.358-1.336-.476-2.762-.713-4.114-1.146-.165-.047-.306-.113-.482-.078z"/>`;
  }
};
export default Aury;

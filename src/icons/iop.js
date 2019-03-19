const Iop = {
  symbol: 'iop',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M10.123 8.283l-3.625 3.293v3.233l-.355.639a1.14 1.14 0 0 0 0 1.104l.355.639v7.199h3.998l.025.044c.194.35.558.566.952.566h8.955c.39 0 .75-.212.946-.557l.592-1.04 3.437-2.98v-3.07l.449-.791a1.14 1.14 0 0 0 0-1.124l-.449-.79v-7.14h-4.058A1.089 1.089 0 0 0 20.428 7h-8.955a1.09 1.09 0 0 0-.952.566zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.473 8.119h8.955L24.905 16l-4.477 7.881h-8.955L7.095 16zm.405.712L7.895 16l3.983 7.17h8.149L24.1 16l-4.073-7.17zm1.883 3.05h4.677l2.189 4.068-2.19 4.068h-4.676l-2.189-4.068z"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#4cb8d1" fill-rule="nonzero" r="16"/><path d="M10.123 8.283l.398-.717A1.09 1.09 0 0 1 11.473 7h8.955c.371 0 .716.192.917.508h4.058v7.14l.449.79a1.14 1.14 0 0 1 0 1.124l-.449.79v3.072l-3.437 2.978-.592 1.041a1.09 1.09 0 0 1-.946.557h-8.955a1.09 1.09 0 0 1-.952-.566l-.025-.044H6.498v-7.2l-.355-.639a1.14 1.14 0 0 1 0-1.104l.355-.639v-3.233zm1.35-.164L7.095 16l4.378 7.881h8.955L24.905 16l-4.477-7.881zm.405.712h8.149L24.1 16l-4.073 7.17h-8.149L7.895 16zm1.883 3.05l-2.189 4.068 2.19 4.068h4.676l2.189-4.068-2.19-4.068z" fill="#fff"/></g>`;
  }
};
export default Iop;
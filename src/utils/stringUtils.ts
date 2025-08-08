const utils = {
    IsEmpty:function(str: string | undefined): boolean {
      return (!str || str.trim() === "");
    }
}
export default utils
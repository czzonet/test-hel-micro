import helMicro from "hel-micro";

export async function callRemoteMethod(version?: string) {
  const lib = await helMicro.preFetchLib(
    "hel-tpl-remote-lib",
    version ? { versionId: version } : undefined
  );
  return lib.num.random(22);
}

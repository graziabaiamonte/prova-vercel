import CardRicettaClient from "./CardRicettaClient";

export default function Veloci({ ricette }) {

  // Assuming you want to filter for fast recipes, set isVeloce to true
  const isVeloce = true;
  return (
    <div className="w-[100vw] flex items-center justify-center py-5">
      <CardRicettaClient isVeloce={isVeloce} ricette={ricette}  className="w-full h-auto" />
    </div>
  );
}

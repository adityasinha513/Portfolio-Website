export default function FloatingLaptop() {
  return (
    <mesh rotation={[0.2,0.3,0]}>
      <boxGeometry args={[3,2,.2]} />
      <meshStandardMaterial color="#111"/>
    </mesh>
  );
}
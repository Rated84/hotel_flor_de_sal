import { GraduationCap } from 'lucide-react';

export default function AcademicNote() {
  return (
    <section className="container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <div className="academic-note reveal">
        <div style={{ marginBottom: '12px' }}>
          <span className="badge">
            <GraduationCap />
            <span>Trabalho Acadêmico • Arquitetura &amp; Urbanismo (UFERSA)</span>
          </span>
        </div>
        <p>
          <strong>Nota Institucional:</strong> Este website é uma peça acadêmica e
          representativa desenvolvida no âmbito da disciplina de Projeto
          Arquitetônico para simular a apresentação comercial e espacial de um
          resort à beira-mar. O projeto integra modelagem 3D, projetos técnicos e
          representação visual por inteligência artificial para aproximar as
          soluções arquitetônicas do mercado profissional. Projeto sem fins
          comerciais.
        </p>
      </div>
    </section>
  );
}


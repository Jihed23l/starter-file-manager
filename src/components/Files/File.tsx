import TableHead from '../UI/TableHead';
import CardFile, { CardFileProps } from './CardFile';

const Files = ({ data }:{data:CardFileProps[]}) => {
  return (
    <main>
      <TableHead />
      {data.map((file:CardFileProps) => {
        return (
          <CardFile
            key={file.id}
            name={file.name}
            createdAt={file.createdAt}
            type={file.type}
            size={file.size}
            id={file.id}
            isStarred={file.isStarred}
            isArchived={file.isArchived}
            starredAt={file.starredAt}
            archivedAt={file.archivedAt}
          />
        );
      })}

      {data.length === 0 && <div className="not-found-file">No file found</div>}
    </main>
  );
};

export default Files;

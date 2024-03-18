import { useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import TrashIcon from '../../assets/icons/Trash.svg';
import StarIcon from '../../assets/icons/Star.svg';
import BoxIcon from '../../assets/icons/Box.svg';
import { useDispatch } from 'react-redux';
import { handleArchivedFile, handleFavoriteFile } from '../../data/slices/files';

const FileAction = ({ id, isStarred, isArchived }:{id:string,isStarred:boolean,isArchived:boolean}) => {
  const location = useLocation();
  let currentLocation = location.pathname;
  const dispatch = useDispatch()

  return (
    <Fragment>
      {currentLocation === '/all-files' && (
        <li className="fileAction">
          <div
            className={
              isStarred ? 'active-action fileActionIcon' : 'star fileActionIcon'
            }
            onClick={()=>dispatch(handleFavoriteFile({fileId:id}))}
          >
            <img src={StarIcon} alt="star" />
          </div>
          <div
            className={
              isArchived ? 'active-action fileActionIcon' : 'box fileActionIcon'
            }
            onClick={()=> dispatch(handleArchivedFile({fileId:id}))}
          >
            <img src={BoxIcon} alt="Box " />
          </div>
        </li>
      )}

      {(currentLocation === '/archived' || currentLocation === '/starred') && (
        <li className="fileAction">
          <div className="trash fileActionIcon"
           >
            <img src={TrashIcon} alt="trash" />
          </div>
        </li>
      )}
    </Fragment>
  );
};
export default FileAction;

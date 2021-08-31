import { FC, useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui';
import ProjectService from '../../services/ProjectService';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { IProjectItem } from '../../model/api/getProjectList';
import './index.scss';
import Taro, { useReachBottom, usePullDownRefresh } from '@tarojs/taro';

const Project: FC = () => {
  const currentEntId = useSelector(
    (state: RootState) => state.enterprise.currentEntId
  );
  const [keyword, setKeyword] = useState<string>('');
  const [total, setTotal] = useState<number>(0);
  const handleSearch = () => {
    setPageNum(1);
    getProjectList();
  };
  const handleClearKeywords = () => {
    setPageNum(1);
    setKeyword('');

  };
  const [pageNum, setPageNum] = useState<number>(1);
  const [projectList, setProjectList] = useState<IProjectItem[]>([]);

  const renderProItem = (project: IProjectItem) => {
    return (
      <View className="project-item" onClick={() => toProjectDetail(project)}>
        <View className="cover" />
        <View className="project-name single-ellipsis center">
          {project.name}
        </View>
        <Text className="create-time">{project.updateTime}</Text>
      </View>
    );
  };

  const toProjectDetail = project => {
    console.log('跳转详情页', project);
  };

  const getProjectList = (page: number = 1) => {
    ProjectService.getProjectList({
      pageNum: page,
      pageSize: 20,
      enterpriseId: currentEntId,
      keyword
    })
      .then(res => {
        const { result } = res;
        if (result) {
          const { pageInfo } = res.result;
          setTotal(pageInfo.total);
          if (pageNum === 1) {
            setProjectList(pageInfo.list);
          } else {
            setProjectList(projectList.concat(pageInfo.list));
          }
        } else {
          setProjectList([]);
          setTotal(0);
        }
      })
      .finally(() => {
        setTimeout(() => {
          Taro.stopPullDownRefresh();
        }, 1500);
      });
  };

  useEffect(() => {
    if (currentEntId) {
      getProjectList(pageNum);
    }
  }, [currentEntId, pageNum]);

  useReachBottom(() => {
    if (projectList.length >= total) return;
    setPageNum(val => val + 1);
  });

  usePullDownRefresh(() => {
    setPageNum(1);
  });

  return (
    <View>
      <View className="search-bar-container">
        <AtSearchBar
          value={keyword}
          onChange={(val: string) => setKeyword(val)}
          onActionClick={handleSearch}
          onClear={handleClearKeywords}
        />
      </View>
      <View className="project-list-container">
        {projectList.map((project: IProjectItem) => renderProItem(project))}
      </View>
    </View>
  );
};

export default Project;
